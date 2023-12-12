"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import YupPassword from "yup-password";
import * as yup from "yup";
import Link from "next/link";
import HidePasswordButton from "@/components/HidePasswordButton";
import { error } from "console";
import axios from "axios";
import { useRouter } from "next/navigation";
YupPassword(yup);
type FormData = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};
const schema = yup
    .object({
        username: yup.string().required("Name is a required field"),
        email: yup.string().email().required("Email is a required field"),
        password: yup
            .string()
            .min(8, "Password must be at least 8 characters")
            .minUppercase(
                1,
                "Password must contain at least 1 uppercase letter",
            )
            .minSymbols(1, "Password must contain at least 1 symbol")
            .required("Password is a required field"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Confirm Password must match")
            .required("Confirm Password is a required field"),
    })
    .required();
const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const router = useRouter();
    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const headers = {
                "Content-Type": "application/json",
            };
            const jsonData = JSON.stringify(data);
            await axios.post(
                `https://virtual-educational-vr-api-production.up.railway.app/api/register`,
                jsonData,
                {
                    headers,
                },
            );
            router.replace("/welcome");
        } catch (error: any) {
            if (error.response.data.status == 404) {
                return alert(error.response.data.message);
            } else {
                return alert(error.response.data.errors);
            }
        }
    };

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
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className="col-span-6">
                                        <label
                                            htmlFor="FirstName"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Username
                                        </label>

                                        <input
                                            type="text"
                                            id="username"
                                            className="mt-1 w-full h-11 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                            {...register("username")}
                                        />
                                        {errors.username && (
                                            <p role="alert">
                                                {errors.username.message}
                                            </p>
                                        )}
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
                                            className="mt-1 w-full h-11 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                            {...register("email")}
                                        />
                                        {errors.email && (
                                            <p role="alert">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 relative">
                                        <HidePasswordButton
                                            id="password"
                                            label="Password"
                                            register={register("password")}
                                            error={errors}
                                        />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <HidePasswordButton
                                            id="confirmPassword"
                                            label="Confirm Password"
                                            register={register(
                                                "confirmPassword",
                                            )}
                                            error={errors}
                                        />
                                        {errors.confirmPassword && (
                                            <p role="alert">
                                                {errors.confirmPassword.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="col-span-6">
                                        <p className="text-sm text-gray-500">
                                            By creating an account, you agree to
                                            our
                                            <Link
                                                href="#"
                                                className="text-gray-700 underline"
                                            >
                                                {" "}
                                                terms and conditions
                                            </Link>{" "}
                                            and{" "}
                                            <Link
                                                href="#"
                                                className="text-gray-700 underline"
                                            >
                                                privacy policy
                                            </Link>
                                            .
                                        </p>
                                    </div>

                                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                        <button className="invalid:opacity-30 inline-block w-full md:w-auto shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                                            Create an account
                                        </button>

                                        <p className="mt-4 text-sm text-center text-gray-500 sm:mt-0">
                                            Already have an account?
                                            <Link
                                                href="/login"
                                                className="text-gray-700 underline"
                                            >
                                                Log in
                                            </Link>
                                            .
                                        </p>
                                    </div>
                                    <div className="col-span-6 flex flex-row justify-center items-center">
                                        <hr className="" />
                                        <p>or</p>
                                        <hr className="" />
                                    </div>
                                    <div className="col-span-6 grid grid-cols-2 gap-4 mt-4">
                                        <Link
                                            href={"/"}
                                            className={`mt-1 h-11 flex justify-center items-center rounded border border-gray-200 bg-white text-sm text-gray-700 shadow-sm`}
                                        >
                                            Google
                                        </Link>
                                        <Link
                                            href={"/"}
                                            className={`mt-1 h-11 flex justify-center items-center rounded border border-gray-200 bg-white text-sm text-gray-700 shadow-sm`}
                                        >
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
