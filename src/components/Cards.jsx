import React from 'react'
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto   bg-white ' src={Single} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <div className='text-center font-medium '>
                        <p className='text-center text-4xl font-bold'>£451</p>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granded User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 Gb</p>
                    </div>
                    <button className='flex justify-center   text-[#000] font-bold bg-[#00df9a] max-w-[200px] rounded mx-auto md:mx-20 px-8 py-2 mt-3'>Start Trial</button>
                </div>
                <div className='w-full bg-gray-100 shadow-2xl flex justify- flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto   bg-transparent ' src={Double} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <div className='text-center font-medium '>
                        <p className='text-center text-4xl font-bold'>£451</p>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granded User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 Gb</p>
                    </div>
                    <button className='flex justify-center  text-[#00df9a] font-bold bg-[#000] max-w-[200px] rounded mx-auto  md:mx-20 md:mt-6 px-8 py-2 mt-3'>Start Trial</button>
                </div>
                <div className='w-full shadow-2xl flex justify- flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto   bg-white ' src={Triple} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <div className='text-center font-medium '>
                        <p className='text-center text-4xl font-bold'>£451</p>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granded User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2 Gb</p>
                    </div>
                    <button className='flex justify-center  text-[#000] font-bold bg-[#00df9a] max-w-[200px] rounded mx-auto md:mx-20 px-8 py-2 mt-3'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
