import Link from "next/link";

const Header = () => {
    const isAdmin = true;

    return (
        <div className="bg-[#b6b6b679] ">
            <div className="max-w-7xl mx-auto py-5 flex items-center justify-between">
                <Link href={'/'}><h2 className="text-3xl font-semibold"><span className="text-orange-400 font-bold">B</span>log.</h2></Link>
                <div className="flex gap-10 items-center">
                    <ul className="flex gap-5 text-xl">
                        <li><Link href={'/blogs'}>Blogs</Link></li>
                        <li><Link href={'/about'}>About</Link></li>
                        <li><Link href={'/contact'}>Contact</Link></li>                     
                    </ul>
                    {isAdmin ? <Link className="bg-red-400 hover:cursor-pointer px-5 py-2 rounded-md text-white" href={'admin'} >Dasbhboard</Link> : <form className="flex">
                        <input className="px-4 py-2 rounded-l border border-red-300 focus:outline-none" type="email" name="email" placeholder="email@example.com" id="" />
                        <input className="px-5 py-2 rounded-r bg-red-300 text-[#3a3a3a] font-medium hover:bg-red-400 hover:cursor-pointer" type="submit" value="Subscribe" />
                    </form>}
                </div>
                
            </div>

        </div>
    );
};

export default Header;