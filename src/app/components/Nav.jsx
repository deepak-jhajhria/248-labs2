"use client"
import Link from 'next/link'
import { Logo } from './Icons'
import CommonBtn from './CommonBtn'
import { Spin as Hamburger } from 'hamburger-react'
import { useOverflowHidden } from "./Hooks";

const Nav = () => {
    const [isOpen, setOpen] = useOverflowHidden(false);
    return (
        <nav className='py-1 position-absolute top-0 w-100'>
            <div className='container py-3 d-flex justify-content-between align-items-center'>
                <Link href={"/"}><Logo /></Link>
                <div className='d-flex align-items-center'>
                    <ul className={`${isOpen ? "end-0" : "-end-100"} d-flex align-items-center m-0 p-0 gap-4 mobileview`}>
                        <li><Link className='navLinks' href={"./about"}>About Us</Link></li>
                        <li><Link className='navLinks' href={"./about"}>Our Team</Link></li>
                        <li><Link className='navLinks' href={"./about"}>Roadmap</Link></li>
                    </ul>
                    <CommonBtn cstm=" ms-2 ms-sm-5" name="Contact Us" />
                    <div className=' position-relative d-block d-lg-none ms-1 ms-sm-2 z-110'>
                        <Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded distance="sm" direction='right' duration={0.5} color='#FFF' />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div onClick={() => setOpen(false)} className='w-full bg-[rgba(0,0,0,0.78)] flex h-full fixed top-0 left-0 z-[30]'>
                </div>
            )}
        </nav>
    )
}

export default Nav
