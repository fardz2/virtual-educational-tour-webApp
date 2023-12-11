"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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

const NewArticlePage = () => {
    const [value, setValue] = useState(``);

    return (
        <div className="mt-12">
            <div className="w-full flex flex-row justify-end mb-6">
                <button className="border" onClick={() => alert("Gajadi Nulis")}> Cancel</button>
                <button className="border" onClick={() => alert("article tersimpan")}> Simpan</button>
            </div>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                modules={modules}
                placeholder="Selamat berkarya...😁"
            />
        </div>
    );
};

export default NewArticlePage;
