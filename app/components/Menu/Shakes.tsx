import React from 'react'
import Card from '../Card/Card'


const items = [
    {
      title: "Beefy Bite",
      image: "/images/b1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique sequi in accusantium, debitis eumillum facere ex unde veniam.",
    },
    {
      title: "Testy Bite",
      image: "/images/b2.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique sequi in accusantium, debitis eumillum facere ex unde veniam.",
    },
    {
        title: "Testy Bite",
        image: "/images/b2.png",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique sequi in accusantium, debitis eumillum facere ex unde veniam.",
      }
    
  ];

const Shakes = () => {
  return (
    <div className="pb-[3rem] flex justify-center">
          <div className="container flex flex-col w-full justify-center">
            <div className='text-center mb-10 mx-3'>
            <h1 className="heading md:text-start text-[37px] font-bold leading-10 mb-5">Shakes + frozen custard</h1>
            <p className='text-lg md:text-start font-medium leading-[23.91px] text-gray-400'>
            Soft, premium ice cream made in house daily with the good stuff: real cane sugar and cage-free eggs. Each Shack restaurant serves its own special concretes that are made exclusively for that Shack. Head to your local Shack to get stuck in!
            </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start ">
              {items.map((item) => (
                <Card 
                  key={item.title}
                  title={item.title}
                  image={item.image}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
  )
}

export default Shakes