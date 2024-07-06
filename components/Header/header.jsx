import Link from "next/link";

const Header = () => {

    return (
        <div className="bg-[#b6b6b679] ">
            <div className="max-w-7xl mx-auto py-5 flex items-center justify-between">
                <Link href={'/'}><h2 className="text-3xl font-semibold"><span className="text-orange-400 font-bold">B</span>log.</h2></Link>
                <div>
                    <ul className="flex gap-5">
                        <li>Blogs</li>
                        <li>Blogs</li>
                        <li>Blogs</li>
                    </ul>
                    <form className="flex">
                        <input type="email" name="email" id="" />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Header;