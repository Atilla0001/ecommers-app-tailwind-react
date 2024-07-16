import React, { useState } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

    const [nav, setNav] = useState(false)

  const clicknav = () => {
        setNav(!nav)
    }


    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#8debbc]'>AtiBaba</h1>
            <ul className=' hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={clicknav} className='block md:hidden' >
                {nav ? <IoMdClose></IoMdClose> :  <IoMenuOutline size={20} ></IoMenuOutline>}
                </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000600] m-4 ease-in-out duration-500" : "fixed left-[-100%]"}>
                <h1 className='w-full text-3xl font-bold text-[#8debbc]'>AtiBaba</h1>
                <ul className=' uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
