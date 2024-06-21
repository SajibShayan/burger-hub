import React from "react";
import Top from "../components/Menu/Top";
import Categories from "../components/Menu/Categories";
import Limited from "../components/Menu/Limited";
import Burger from "../components/Menu/Burger";
import Chicken from "../components/Menu/Chicken";
import Crinkle from "../components/Menu/Crinkle";
import Flat from "../components/Menu/Flat";
import Shakes from "../components/Menu/Shakes";
import SoftDrink from "../components/Menu/SoftDrink";


const Meunu = () => {
  return (
    <div className="">
      {/* top */}
      <Top />
      <Categories />
      <Limited />
      <Burger />
      <Chicken />
      <Crinkle />
      <Flat />
      <Shakes />
      <SoftDrink />
    </div>
  );
};

export default Meunu;
