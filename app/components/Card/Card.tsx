import Image from 'next/image'
import React from 'react'
interface props {
    title: string;
    image: string;
    description: string;
}

const Card = ({
    title,
    image,
    description,
  
}: props) => {
  return (
    <div className="bg-[#F4F4F4]  p-4 m-3 border max-w-[500px] items-start rounded-[33px]">
    {/* img div */}
    <div className=" flex gap-5">
      <div className="w-[135px] h-[115px] rounded-3xl">
        <Image src={image} alt="title" width={200} height={200} className="w-[100%] h-[100%] object-cover" />
      </div>
      <div className="flex-1">
        <h1 className="mt-[1.3rem text-[22px] text-black font-semibold">
          {title}
        </h1>

        <p className="mt-[0.5rem] text-black text-opacity-70">
         {description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Card