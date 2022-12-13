import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { categories, ProductsApi } from "../Data/Data.js";
import Item from "../Utilis/Item.jsx";
import Title from "../Utilis/Title";

const Categories = () => {
  const [products, setProducts] = useState(ProductsApi);
  useEffect(() => {
    setProducts(ProductsApi);
  }, []);
  const handleFilter = (category) => {
    if (category === "All products") {
      setProducts(ProductsApi);
    } else {
      setProducts(ProductsApi.filter((item) => item.category === category));
    }
  };
  return (
      <div className="">
      <Title title="categories" />
      <div className="my-4  flex flex-col md:flex-row gap-6 items-center justify-center ">
        {categories.map((item, index) => (
          <NavLink
            key={index}
            onClick={() => handleFilter(item)}
            className="text-lg md:text-xl lg:text-2xl text-center w-auto duration-300 bg-black text-white rounded-lg p-2 capitalize "
          >
            {item}
          </NavLink>
        ))}
      </div>
      <Item items={products} />
      </div>
  );
};

export default Categories;
