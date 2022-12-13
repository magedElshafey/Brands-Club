import React from "react";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { closeCart, clearCart } from "../../Redux/CartSlice.js";
const CartCounter = ({ items }) => {
  const dispatch = useDispatch();
      
  return (
    <div className="fixed top-0 left-0 right-0 h-[70px] bg-white p-4">
      <div className="flex justify-between items-center">
       
          <RxDoubleArrowLeft
            size={25}
            className="cursor-pointer duration-300 hover:text-yellow-500"
            onClick={() => dispatch(closeCart(false))}
          />
        
      
        <AiOutlineClose
          size={30}
          className={`${
            items.length
              ? "cursor-pointer bg-black text-white rounded-md shadow-md shadow-black p-1"
              : " invisible"
          }`}
          onClick={() => dispatch(clearCart())}
        />
      </div>
    </div>
  );
};

export default CartCounter;
