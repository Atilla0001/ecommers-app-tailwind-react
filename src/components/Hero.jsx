import React from 'react'
import { ReactTyped } from "react-typed";




const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>GROWİNG WİTH DATA ANALITICS</p>
                <h1 className='md:text-7xl text-4xl sm:text-3xl font-bold md:py-6'>GROW WİTH ATİ BABA</h1>
                <div className='flex justify-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold items-center'>Fast, flexible financing for</p>
                    <p className='md:text-5xl sm:text-4xl text-xl text-gray-500 font-bold pl-1'>Saas</p>
                
                </div>
                <ReactTyped
                        className='text-[12px] font-bold text-gray-600'
                        strings={["Here you can find anything you want"]}
                        typeSpeed={20}
                        loop
                    />
                    <button className='flex justify-center text-black font-bold bg-[#00df9a] max-w-[150px] rounded mx-auto px-8 py-2 mt-1'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero
