import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
                        `https://virtual-educational-vr-api-production.up.railway.app/api/login`,
                        options,
                    );
                    if (response.ok) {
                        const res = await response.json();
                        const resData = res.data;
                        const resRet: any = {
                            id: resData.id,
                            name: resData.username,
                            email: resData.email,
                            role: resData.role.role,
                            accessToken: res.token,
                        };
                        console.log(resRet);
                        return resRet;
                    } else {
                        // Handle non-successful response here, return an appropriate JSON response.
                        throw new Error("gagal");
                    }
                } catch (error) {
                    throw new Error("gagal");
                }
                return null;
            },
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        // }),
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
