'use client'

import Link from "next/link";


const Header = () => {
    return (
        <>
           <header className="header">
                <div className="nav">
                    <div className="uppercase text-sm font-light">
                        <Link href='/'><span className="text-gray-100 font-semibold">Hannan's TechBlog</span></Link>
                    </div>
                    <div className="nav-list">
                        <Link href='/'>home</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/contacts'>Contacts</Link>
                        <Link href='/blog'>Blog</Link>
                    </div>
                    <div>
                        <input type="text" className="input-pri" placeholder="search" />
                        <button className="btn-pri">search</button>
                    </div>
                </div>
                    
            </header>
        </>
    );
}
 
export default Header;