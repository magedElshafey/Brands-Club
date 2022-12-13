import React from "react";
import { ProductsApi } from "../Data/Data.js";
import Title from "../Utilis/Title.jsx";
import Item from "../Utilis/Item.jsx";

const Products = () => {
  return (
    <div className="relative max-w-[1640px] mx-auto px-4">
      <Title title="all products" />
      <Item items={ProductsApi} />
    </div>
  );
};

export default Products;
