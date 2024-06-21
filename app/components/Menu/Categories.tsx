"use client";
import CurretnPath from "@/utils/helper";
import Link from "next/link";
import React from "react";
import { FaBurger } from "react-icons/fa6";

const Categories = () => {
  return (
    <div className="flex justify-center bg-[#F4F4F4]">
      <div className="container py-9 cata-sub-nav">
        {/* nav div */}
        <ul className="flex items-center space-x-2 justify-start">
          <li className="categories">
            <Link href="/" className="flex gap-2">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Burgers
            </Link>
          </li>
          <li className="categories">
            <Link href="/" className="flex gap-2">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Chicken
            </Link>
          </li>
          <li className="categories">
            <Link href="/menu" className="flex gap-2">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Crinkle cut fries
            </Link>
          </li>
          <li className="categories">
            <Link href="/" className="flex gap-2">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Flat – Top Dogs
            </Link>
          </li>
          <li className="categories">
            <Link href="/" className="flex gap-2">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Shakes + frozen custard
            </Link>
          </li>
          <li className="categories">
            <Link href="/" className="flex gap-2">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Soft Drinks
            </Link>
          </li>
          <li className="categories">
            <Link href="/" className="flex gap-2">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Beer + Wine
            </Link>
          </li>
          <li className="categories">
            <Link href="/" className="flex gap-2">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Woof menu
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Categories;
