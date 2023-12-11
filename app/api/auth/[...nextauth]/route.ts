import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Email and Password",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                const data = {
                    email: email,
                    password: password,
                };
                const headers = new Headers({
                    "Content-Type": "application/json",
                });
                const options = {
                    method: "POST",
                    headers,
                    body: JSON.stringify(data),
                };
                try {
                    const response = await fetch(
                        "http://127.0.0.1:8000/api/login",
                        options,
                    );
                    if (response.ok) {
                        const res = await response.json();
                        const resData = res.data;
                        const resRet: any = {
                            id: resData.id,
                            name: resData.name,
                            email: resData.email,
                            role: resData.role.role,
                            accessToken: res.token,
                        };
                        return resRet;
                    } else {
                        console.log("HTTP error! Status:", response.status);
                        // Handle non-successful response here, return an appropriate JSON response.
                        return { error: "Authentication failed" };
                    }
                } catch (error) {
                    console.log("Error", error);
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, user }: any) {
            if (user) {
                token.user = user;
                token.accessToken = user.access_token;
            }
            return token;
        },
        async session({ session, token }: any) {
            session.user = token.user;
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
