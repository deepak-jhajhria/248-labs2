import Link from 'next/link'
import React from 'react'
import { Logo } from './Icons'
import CommonBtn from './CommonBtn'

const Nav = () => {
    return (
        <nav className='py-1 position-absolute top-0 w-100'>
            <div className='container py-3 d-flex justify-content-between align-items-center'>
                <Link href={"/"}><Logo /></Link>
                <div className='d-flex'>
                    <ul className=' d-flex align-items-center gap-4 m-0 p-0'>
                        <li><Link className='navLinks' href={"./about"}>About Us</Link></li>
                        <li><Link className='navLinks' href={"./about"}>Our Team</Link></li>
                        <li><Link className='navLinks' href={"./about"}>Roadmap</Link></li>
                    </ul>
                    <CommonBtn cstm="ms-5" name="Contact Us" />
                </div>
            </div>
        </nav>
    )
}

export default Nav
