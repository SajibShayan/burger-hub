import React from 'react'

import image1 from "@/public/images/f1.jpg"
import image2 from "@/public/images/f2.jpg"
import image3 from "@/public/images/f3.jpg"
import Image from 'next/image'

const Feature = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        
        {/* heading */}
        <h1 className='heading'>
            burger made with <br /> love and
            <span className='text-red-600'> Care</span>
        </h1>

        {/* cards */}

        <div className='w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]'>
            {/* 1st card */}
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" >
                <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                    <Image src={image1} alt='burger' className='rounded-3xl'/>
                    <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>Our Burger</h1>
                    <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora facilis iure quia eaque ipsa quae dolor a, inventore suscipit minus ducimus beatae commodi officiis. 
                    </p>
                </div>
            </div>

            {/* 2nd card */}
            <div data-aos="zoom-in" data-aos-delay="200" data-aos-anchor-placement="top-center">
                <div className='p-6 lg:translate-y-[3rem] hover:bg-white rounded-lg transition-all duration-200'>
                    <Image src={image2} alt='burger' className='rounded-3xl'/>
                    <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>Chicken Burgers</h1>
                    <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora facilis iure quia eaque ipsa quae dolor a, inventore suscipit minus ducimus beatae commodi officiis. 
                    </p>
                </div>
            </div>

            {/* 3rd card */}
            <div data-aos="fade-right" data-aos-delay="400" data-aos-anchor-placement="top-center">
                <div className='p-6 hover:bg-white rounded-lg transition-all duration-200'>
                    <Image src={image3} alt='burger' className='rounded-3xl'/>
                    <h1 className='mt-[1.5rem] text-center text-[24px] text-black font-semibold'>Your Opinion is important</h1>
                    <p className='mt-[0.2rem] text-black text-opacity-60 text-center'>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora facilis iure quia eaque ipsa quae dolor a, inventore suscipit minus ducimus beatae commodi officiis. 
                    </p>
                </div>
            </div>
        </div>
        
        </div>
  )
}

export default Feature