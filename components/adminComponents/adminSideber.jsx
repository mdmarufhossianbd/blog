import Link from "next/link";

const AdminSideber = () => {
    return (
        <div className="w-[300px] h-full border">
            <li className="list-none flex flex-col">
                <Link className="bg-green-300 text-black w-full" href={'/admin/add-blog'}>Add Blog</Link>
                <Link className="w-full" href={'/admin/blogs'}>All blogs</Link>
                {/* <Link className="" href={'dashboard/blogs'}>Comments</Link> */}
            </li>
        </div>
    );
};

export default AdminSideber;