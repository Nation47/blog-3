import Link from "next/link";
import {FaTwitter, FaInstagram, FaFacebook} from "react-icons/fa";


const SideBar = () => {
    return (
        <>
             <div className="shadow-md">
                <div className="sidebar-header">
                    <div className="text-white flex justify-between items-center ">
                        <div>
                            <h2>We are on</h2>
                        </div>
                    <div className="flex space-x-4 cursor-pointer">
                            <FaTwitter />
                            <FaInstagram />
                            <FaFacebook />
                    </div>
                    </div>
                </div>
                <div className="space-y-6 bg-white px-4 pt-3 h-screen">
                    <div className="sidebar-list">
                        <Link href='/' className="hover:border-r-2  border-blue-600"> <span className="ml-1">Categories</span></Link>
                        <Link href='/'className="hover:border-r-2  border-blue-600"> <span className="ml-1">Recent posts</span></Link>
                        <Link href='/'className="hover:border-r-2  border-blue-600"> <span className="ml-1">Popular posts</span></Link>
                        <Link href='/'className="hover:border-r-2  border-blue-600"> <span className="ml-1">Related posts</span></Link>
                        <Link href='/'className="hover:border-r-2  border-blue-600"> <span className="mr-1">Author | Contributor information</span></Link>
                    </div>
                    <h2 className="font-semibold text-blue-900 uppercase text-sm border-b border-blue-900 pt-10">Social medias</h2>
                    <div className="flex flex-col text-blue-900 space-y-2">
                        <Link href='/' className="flex items-center"><FaTwitter className="mr-2"/> <span className="text-sm font-semibold">Twitter</span></Link>
                        <Link href='/' className="flex items-center"><FaInstagram  className="mr-2"/><span className="text-sm font-semibold">Instagram</span></Link>
                        <Link href='/' className="flex items-center"><FaFacebook  className="mr-2"/><span className="text-sm font-semibold">Facebook</span></Link>
                    </div>
                    <div className="">
                        <button className="btn-act">Call to action button</button>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default SideBar;