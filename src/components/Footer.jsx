import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare,FaDribbbleSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>AtiBaba</h1>
        <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore perferendis reiciendis deleniti.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
        <FaSquareFacebook  size={30}/>
        <FaInstagramSquare  size={30}/>
        <FaSquareGithub  size={30}/>
        <FaSquareXTwitter size={30} />
        <FaDribbbleSquare size={30} />

        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between'>
<div>
    <h6 className='font-medium text-gray-400'>Solutions</h6>
    <ul>
        <li className='py-2 text-sm'>Analytics</li>
        <li className='py-2 text-sm'>Marketing</li>
        <li className='py-2 text-sm'>Commers</li>
        <li className='py-2 text-sm'>About Us</li>
    </ul>
</div>
<div>
    <h6 className='font-medium text-gray-400'>Support</h6>
    <ul>
        <li className='py-2 text-sm'>Docs</li>
        <li className='py-2 text-sm'>Guides</li>
        <li className='py-2 text-sm'>Commers</li>
        <li className='py-2 text-sm'>About Us</li>
    </ul>
</div>
<div>
    <h6 className='font-medium text-gray-400'>Company</h6>
    <ul>
        <li className='py-2 text-sm'>Blog</li>
        <li className='py-2 text-sm'>Customer</li>
        <li className='py-2 text-sm'>Jobs</li>
        <li className='py-2 text-sm'>About Us</li>
    </ul>
</div>
<div>
    <h6 className='font-medium text-gray-400'>Legal</h6>
    <ul>
        <li className='py-2 text-sm'>Claim</li>
        <li className='py-2 text-sm'>Policy</li>
        <li className='py-2 text-sm'>Commers</li>
        <li className='py-2 text-sm'>About Us</li>
    </ul>
</div>
      </div>
    </div>
  )
}

export default Footer
