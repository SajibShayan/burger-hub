"use client";
import useSectionHighlight from "@/utils/activeCategories";
import CurretnPath from "@/utils/helper";
import Link from "next/link";
import React from "react";
import { FaBurger } from "react-icons/fa6";

const Categories = () => {

  useSectionHighlight();

  return (
    <div className="flex justify-center bg-[#F4F4F4] sticky top-0 left-0 h-full">
      <div className="container py-9 cata-sub-nav">
        {/* nav div */}
        <nav>
        <ul className="flex items-center space-x-2 justify-start">
          <li className="">
            <Link href="#burgers" className="flex gap-2 categories duration-0">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Burgers
            </Link>
          </li>
          <li className="">
            <Link href="#chicken" className="flex gap-2 categories duration-0">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Chicken
            </Link>
          </li>
          <li className="">
            <Link href="#crinkle" className="flex gap-2 categories duration-0">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Crinkle cut fries
            </Link>
          </li>
          <li className="">
            <Link href="#flat" className="flex gap-2 categories duration-0">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Flat – Top Dogs
            </Link>
          </li>
          <li className="">
            <Link href="#shakes" className="flex gap-2 categories duration-0">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Shakes + frozen custard
            </Link>
          </li>
          <li className="">
            <Link href="#soft-drinks" className="flex gap-2 categories duration-0">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Soft Drinks
            </Link>
          </li>
          <li className="">
            <Link href="#beer" className="flex gap-2 categories duration-0">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Beer + Wine
            </Link>
          </li>
          <li className="">
            <Link href="#woof" className="flex gap-2 categories duration-0">
              <span>
                <FaBurger className="w-[1.7rem] h-[1.7rem]" />
              </span>
              Woof menu
            </Link>
          </li>
          
        </ul>
        </nav>

      </div>
    </div>
  );
};

export default Categories;
