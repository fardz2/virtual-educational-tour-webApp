import React from "react";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <>
            <section>
                <section className="bg-white">
                    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                            <div className="absolute inset-0 h-full w-full object-cover opacity-80"></div>

                            <div className="hidden lg:relative lg:block lg:p-12">
                                <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                    Welcome to New World!
                                </h2>

                                <p className="mt-4 leading-relaxed text-white/90">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Eligendi nam dolorum
                                    aliquam, quibusdam aperiam voluptatum.
                                </p>
                            </div>
                        </section>

                        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                            <div className="max-w-xl lg:max-w-3xl">
                                <div className="relative -mt-16 block lg:hidden">
                                    <h1 className="mt-16 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                        Welcome to New World!
                                    </h1>

                                    <p className="mt-4 leading-relaxed text-gray-500">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Eligendi nam dolorum
                                        aliquam, quibusdam aperiam voluptatum.
                                    </p>
                                </div>

                                <form
                                    action="#"
                                    className="mt-8 grid grid-cols-6 gap-6"
                                >
                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="FirstName"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            First Name
                                        </label>

                                        <input
                                            type="text"
                                            id="FirstName"
                                            name="first_name"
                                            className="mt-1 w-full h-11 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="LastName"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Last Name
                                        </label>

                                        <input
                                            type="text"
                                            id="LastName"
                                            name="last_name"
                                            className="mt-1 w-full h-11 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label
                                            htmlFor="Email"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            id="Email"
                                            name="email"
                                            className="mt-1 w-full h-11 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="Password"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            id="Password"
                                            name="password"
                                            className="mt-1 w-full h-11 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label
                                            htmlFor="PasswordConfirmation"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Password Confirmation
                                        </label>

                                        <input
                                            type="password"
                                            id="PasswordConfirmation"
                                            name="password_confirmation"
                                            className="mt-1 w-full h-11 rounded-md border border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <p className="text-sm text-gray-500">
                                            By creating an account, you agree to
                                            our
                                            <a
                                                href="#"
                                                className="text-gray-700 underline"
                                            >
                                                {" "}
                                                terms and conditions
                                            </a>{" "}
                                            and{" "}
                                            <a
                                                href="#"
                                                className="text-gray-700 underline"
                                            >
                                                privacy policy
                                            </a>
                                            .
                                        </p>
                                    </div>

                                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                        <button className="inline-block w-full md:w-auto shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                                            Create an account
                                        </button>

                                        <p className="mt-4 text-sm text-center text-gray-500 sm:mt-0">
                                            Already have an account?
                                            <a
                                                href="#"
                                                className="text-gray-700 underline"
                                            >
                                                Log in
                                            </a>
                                            .
                                        </p>
                                    </div>
                                    <hr className="w-full h-full" />
                                    <div className="flex flex-row gap-4 mt-4">
                                        <Link href={"/"} className={``}>
                                            Google
                                        </Link>
                                        <Link href={"/"} className={``}>
                                            Microsoft
                                        </Link>
                                        <Link href={"/"} className={``}></Link>
                                    </div>
                                </form>
                            </div>
                        </main>
                    </div>
                </section>
            </section>
        </>
    );
};

export default RegisterPage;