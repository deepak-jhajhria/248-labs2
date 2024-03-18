import React from 'react'
import Nav from './Nav'
import Image from 'next/image'
import btn from '../../../public/assets/images/headerbottombtn.png'
const Hero = () => {
    return (
        <div className='bgHeader d-flex position-relative'>
            <Nav />
            <div className='container d-flex align-items-center max-w-873 flex-grow-1'>
                <div className='d-flex flex-column align-items-center'>
                    <h1 className='text-white text-center m-0'>Changing the way games are made</h1>
                    <p className='text-white mt-2 mt-sm-3 mb-0'>Redefining the future of play</p>
                </div>
            </div>
            <Image className=' position-absolute bottom-0 start-50 translate-middle-x scrollDownIcon' src={btn} alt='image' width={95} height={50} />
        </div>
    )
}

export default Hero
