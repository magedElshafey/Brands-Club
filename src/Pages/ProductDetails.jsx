import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsApi, popularSales, toprateslaes } from "../Data/Data";
import { AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { openCart, addToCart } from "../Redux/CartSlice.js";

const ProductDetails = () => {
  const allProducts = [
    ...ProductsApi,
    ...popularSales.items,
    ...toprateslaes.items,
  ];

  const params = useParams();
  const [product, setProduct] = useState({});
  const handleDetails = () => {
    const index = allProducts.findIndex((item) => item.id == params.productId);
    setProduct(allProducts[index]);
  };
  useEffect(() => {
    handleDetails();
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.auth);
  const handleAddToCart = (item) => {
      if (state.authState) {
        dispatch(
          addToCart({
            id: item.id,
            title: item.title,
            text: item.text,
            img: item.img,
            color: item.color,
            shadow: item.shadow,
            price: item.price,
          })
        );
      } else {
        alert("you need to login");
        navigate("/regester");
      }
    };
    const handleByProcess = (item) => {
      if (state.authState) {
        dispatch(openCart(true));
        handleAddToCart(item);
      } else {
        alert("you need to login first before adding ");
        navigate("/regester");
      }
    };
  return (
    <div className="py-12 md:py-20 lg:py-24 px-4 max-w-[1640px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center">
          <h1 className="mb-4 font-bold text-xl md:text-2xl lg:text-3xl">
            {product.title}
          </h1>
          <p className="mb-4 text-lg md:text-xl lg:text-2xl">{product.text}</p>
          <div className="flex items-center gap-4 justify-center">
            <p className="bg-black text-white p-2 rounded-md">
              {product.price}
            </p>
            <div className="flex items-center gap-1">
              <span>{product.rating}</span>
              <AiOutlineStar size={20} />
            </div>
          </div>
          <div className="flex items-center gap-4 my-4 justify-center">
            <AiOutlineShoppingCart
            onClick={() => handleAddToCart(product)}
              className="bg-black text-white p-2 h-10 w-10 rounded-md cursor-pointer "
            />
            <button
            onClick={() => handleByProcess(product)}
              className="bg-black text-white p-2 rounded-md "
            >
              by now
            </button>
          </div>
        </div>
        <img
          src={product.img}
          alt="product/img"
          className="w-1/3 object-cover h-auto"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
