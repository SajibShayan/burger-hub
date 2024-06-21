import React from 'react'
import { BiCycling } from "react-icons/bi";
import { FaBucket } from "react-icons/fa6";

const Top = () => {
  return (
    <div className='flex justify-center'>
    <div className="h-[250px] flex flex-col md:flex-row  w-[80%] items-center justify-around">
    <h1 className="text-black text-5xl font-bold leading-10 text-left uppercase">our menu</h1>

    <div className="flex flex-col md:flex-row justify-between md:space-x-10 space-y-4 md:space-y-0">
    <button className="px-12 py-3 text-[16px] bg-[#418613] border border-solid border-[#418613] transition-all duration-200 hover:bg-white flex items-center rounded-full space-x-2 text-white hover:text-[#418613] text-center justify-center">
        <span>
          <BiCycling className="w-[1.7rem] h-[1.7rem]" />
        </span>
        <span className="font-bold">Order Now</span> 
      </button>

      <button className="px-12 py-3 text-[16px] bg-[#418613] border border-solid border-[#418613] transition-all duration-200 hover:bg-white flex items-center rounded-full space-x-2 text-white hover:text-[#418613] text-center justify-center">
        <span>
          <FaBucket className="w-[1.7rem] h-[1.7rem]" />
        </span>
        <span className="font-bold">Click & Collect</span>
      </button>
    </div>

  </div>
  </div>
  )
}

export default Top