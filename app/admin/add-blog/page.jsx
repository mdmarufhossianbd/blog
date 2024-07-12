"use client"
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import uploadIcon from "../../../assets/upload-icon.png";


const AddBlog = () => {

    const [thumPreview, setThumPreview] = useState(false);
    const [data, setData] = useState({
        title : "",
        description : "",
        category : "Coding",
        author : "Maruf Hossain",
        authorImg : "../../../assets/author_img.jpg",
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data=>({...data, [name]:value}))
        // console.log(data);
    }

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImg', data.authorImg);
        formData.append('image', thumPreview)
        const response = await axios.post('/api/blog', formData);
        if(response.data.success) {
            console.log(response, 'add added');
        }
    }

    return (
        <div className="flex flex-col w-full">
            <h2 className="text-3xl font-semibold py-3 text-center w-full">Add a new blog </h2>
            <form onSubmit={onSubmitHandler} className="ml-5 flex gap-5">
                <div className="flex flex-col gap-3 w-3/4">
                    <label className="text-2xl font-medium">
                        Blog Title
                    </label>
                    <input onChange={onChangeHandler} value={data.title} className="border px-4 py-2 border-red-300 rounded focus:outline-none" type="text" name="title" placeholder="Write here blog title" required />
                    <label className="text-2xl font-medium">
                        Blog Content
                    </label>
                    <textarea value={data.description} onChange={onChangeHandler} className="border border-red-300 rounded focus:outline-none px-4 py-2" placeholder="Write your content here" name="description" rows={20} required>
                    </textarea>
                </div>
                <div>
                    <label htmlFor="thum_image">
                        <p className="my-5 text-2xl font-medium">Blog Thumbnail</p>
                        <Image className="border rounded border-red-300" src={!thumPreview ? uploadIcon : URL.createObjectURL(thumPreview)} width={200} height={140} alt="upload icon" />
                    </label>
                    <input onChange={(e) => setThumPreview(e.target.files[0])} hidden required type="file" id="thum_image" />
                    <div className="flex flex-col items-start">
                        <label className="my-5 text-2xl font-medium">Blog Category</label>
                        <select onChange={onChangeHandler} className="text-xl border border-red-300 rounded p-1" name="category" id="">
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