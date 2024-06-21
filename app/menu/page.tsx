import React from "react";
import Top from "../components/Menu/Top";
import Categories from "../components/Menu/Categories";
import Limited from "../components/Menu/Limited";
import Burger from "../components/Menu/Burger";
import Chicken from "../components/Menu/Chicken";


const Meunu = () => {
  return (
    <div className="">
      {/* top */}
      <Top />
      <Categories />
      <Limited />
      <Burger />
      <Chicken />
    </div>
  );
};

export default Meunu;
