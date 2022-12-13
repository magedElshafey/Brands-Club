import React from "react";
import emptybag from "../../assets/emptybag.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { closeCart } from "../../Redux/CartSlice.js";
import { useDispatch } from "react-redux";
const EmptyCart = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-4">
      <img
        src={emptybag}
        alt="bag/img"
        className="h-[40vh] sm:h-[21vh] md:h-[30vh] lg:h-[35vh]"
      />
      <button
        className="rounded-md p-2 bg-gradient-to-r from-orange-300 to-orange-700 shadow-lg shadow-yellow-700"
        onClick={() => dispatch(closeCart(false))}
      >
        <div className="flex items-center gap-3">
          <AiOutlineArrowLeft size={20} />
          <p>back to brands club</p>
        </div>
      </button>
    </div>
  );
};

export default EmptyCart;
