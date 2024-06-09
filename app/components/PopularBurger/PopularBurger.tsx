"use client";
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BargurCard from "./BargurCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const items = [
  {
    title: "Beefy Bite",
    image: "/images/b1.png",
    reviews: "6",
    price: "10.88$",
  },
  {
    title: "Testy Bite",
    image: "/images/b2.png",
    reviews: "6",
    price: "10.88$",
  },
  {
    title: "Beefy Bite",
    image: "/images/b3.png",
    reviews: "6",
    price: "10.88$",
  },
  {
    title: "Testy Bite",
    image: "/images/b4.png",
    reviews: "6",
    price: "10.88$",
  },
  {
    title: "Beefy Bite",
    image: "/images/b5.png",
    reviews: "6",
    price: "10.88$",
  },
  {
    title: "Beefy Bite",
    image: "/images/b6.png",
    reviews: "6",
    price: "15.88$",
  },
  {
    title: "Beefy Bite",
    image: "/images/b7.png",
    reviews: "6",
    price: "10.88$",
  },
  {
    title: "Testy Bite",
    image: "/images/b8.png",
    reviews: "16",
    price: "20$",
  },
  {
    title: "Beefy Bite",
    image: "/images/b9.png",
    reviews: "10",
    price: "10$",
  },
];

const PopularBurger = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]">
      <h1 className="heading">
        Our Popular <span className="text-red-600">Burgers</span>
      </h1>

      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          responsive={responsive}
          itemClass="item"
          showDots={true}
        >
            {items.map((item) => (
              <BargurCard
                key={item.title}
                title={item.title}
                image={item.image}
                reviews={item.reviews}
                price={item.price}
              />
            ))}
          {/* <BargurCard title="Beefy Bite" image="/images/b1.png" reviews="6" price="10.88$" /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default PopularBurger;
