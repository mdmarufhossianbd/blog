"use client"
import Image from "next/image";
import { useState } from "react";
import uploadIcon from "../../../assets/upload-icon.png";

const AddBlog = () => {

    const [thumPreview, setThumPreview] = useState()


    return (
        <div className="flex flex-col w-full">
            <h2 className="text-3xl font-semibold py-3 text-center w-full">Add a new blog </h2>
            <form className="ml-5 flex gap-5">
                <div className="flex flex-col gap-3 w-3/4">
                    <label className="text-2xl font-medium">
                        Blog Title
                    </label>
                    <input className="border px-4 py-2 border-red-300 rounded focus:outline-none" type="text" name="title" placeholder="Write here blog title" required />
                    <label className="text-2xl font-medium">
                        Blog Content
                    </label>
                    <textarea className="border focus:outline-none px-4 py-2" placeholder="Write your content here" name="description" rows={20} required>
                    </textarea>
                </div>
                <div>
                    <label className="" htmlFor="thum_image">
                        <p className="my-5 text-2xl font-medium">Blog Thumbnail</p>
                        <Image className="border" src={!thumPreview ? uploadIcon : URL.createObjectURL(thumPreview)} width={200} height={140} alt="upload icon" />
                    </label>
                    <input onChange={(e) => setThumPreview(e.target.files[0])} hidden required type="file" id="thum_image" />
                    <div className="flex flex-col items-start">
                        <label className="my-5 text-2xl font-medium">Blog Category</label>
                        <select className="text-xl border rounded p-1" name="category" id="">
                            <option defaultChecked value="Choose Category">Choose Category</option>
                            <option value="Laravel">Laravel</option>
                            <option value="Python">Python</option>
                            <option value="Java">Java</option>
                            <option value="CSS">CSS</option>
                            <option value="HTML">HTML</option>
                        </select>
                    </div>
                    <input className="my-5 py-2 px-5 rounded bg-green-300 w-full text-black hover:bg-green-400 hover:cursor-pointer" type="submit" value="Publish" />
                </div>
            </form>
        </div>
    );
};

export default AddBlog;