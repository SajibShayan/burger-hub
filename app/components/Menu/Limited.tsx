import React from "react";
import MenuCard from "./MenuCard";

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
  },
  {
    title: "Testy Bite",
    image: "/images/b2.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem similique sequi in accusantium, debitis eumillum facere ex unde veniam.",
  },
  
];


const Limited = () => {
  return (
    <div className="pb-[3rem] bg-[#F4F4F4] flex justify-center">
      <div className="container flex flex-col w-full justify-center">
        <h1 className="heading text-center md:text-start text-[37px] font-bold leading-10 mx-3 mb-5">Limited time only</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-start ">
          {items.map((item) => (
            <MenuCard 
              key={item.title}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Limited;
