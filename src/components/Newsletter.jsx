import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
     <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:cols-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, similique.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row  items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black mr-4' type="email" placeholder='e-mail' />
                <button className='flex justify-center items-center text-black rounded-md font-bold bg-[#00df9a] h-[48px]  mx-auto px-8  mt-1 lg:ml-4 sm:ml-0'  > <span style={{whiteSpace:"nowrap"}}> Notify me</span></button>
            </div>
            <p className=''> Lorem, ipsum dolor sit amet <span className='text-[#00df9a]'>consectetur adipisicing.</span> </p>
        </div>
        
     </div>
    </div>
  )
}

export default Newsletter
