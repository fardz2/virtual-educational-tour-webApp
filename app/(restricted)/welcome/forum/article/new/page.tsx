"use client";

import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactQuill from "react-quill";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const modules = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
};
type FormData = {
    title: string;
    content: string;
};
const schema = yup
    .object({
        title: yup.string().required("Title is a required field"),
        content: yup.string().required("Content is a required field"),
    })
    .required();
const NewArticlePage = () => {
    const {
        handleSubmit,
        control,
        register,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const router = useRouter();
    const { data: session } = useSession();
    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session?.user.accessToken}`,
            };
            const jsonData = JSON.stringify(data);
            console.log(jsonData);
            await axios.post(
                `https://virtual-educational-vr-api-production.up.railway.app/api/article`,
                jsonData,
                {
                    headers,
                },
            );
            router.push("/welcome");
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <div className="mt-12">
            <div className="w-full flex flex-row justify-end mb-6">
                <button
                    className="border"
                    onClick={() => alert("Gajadi Nulis")}
                >
                    {" "}
                    Cancel
                </button>
                <input
                    type="submit"
                    className="border"
                    onClick={handleSubmit(onSubmit)}
                />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                >
                    Title
                </label>

                <input
                    type="text"
                    id="Email"
                    className="mt-1 w-full h-11 border rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    {...register("title")}
                />
                {errors.title && <p role="alert">{errors.title.message}</p>}
            </div>
            <Controller
                name="content"
                control={control}
                render={({ field: { onChange, onBlur } }) => (
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Selamat berkarya...😁"
                    />
                )}
            />
            {errors.content && <p role="alert">{errors.content.message}</p>}
        </div>
    );
};

export default NewArticlePage;
