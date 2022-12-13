import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineMinus, AiOutlinePlus, AiTwotoneDelete } from "react-icons/ai";
import { decreaseQTY, increaseQTY, removeItem } from "../../Redux/CartSlice.js";
const CartItems = ({ items }) => {
  const dispatch = useDispatch();
  const totalPrice = items.reduce((acc, product) => {
    acc += +product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <>
      <div className="text-black font-bold  relative left-2 top-20 h-[90vh] px-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center lg:flex-row lg:justify-between items-center mb-4 gap-y-4"
          >
            <div
              className={`bg-gradient-to-tr ${item.color} ${item.shadow} rounded-lg relative p-3 w-[300px] h-[300px]`}
            >
              <p className=" absolute top-1 right-1 bg-white text-black px-1">
                ${item.price}
              </p>
              <img
                src={item.img}
                alt="cart/img"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="mb-2 text-center">{item.title}</p>
              <p className=" mb-6 text-slate-700">{item.text}</p>
              <div className="flex  gap-4 justify-center items-center ">
                <AiOutlineMinus
                  className="bg-black text-white p-2 cursor-pointer 
                        duration-300 active:scale-110 rounded-md w-7 h-7 flex items-center justify-center"
                  onClick={() => dispatch(decreaseQTY(item))}
                />
                <p className="bg-black text-white p-2 rounded-md w-7 h-7 flex items-center justify-center">
                  {item.quantity}
                </p>
                <AiOutlinePlus
                  className="bg-black text-white p-2 cursor-pointer 
                              duration-300 active:scale-110 rounded-md w-7 h-7 flex items-center justify-center"
                  onClick={() => dispatch(increaseQTY(item))}
                />
              </div>
            </div>
            <div>
              <p className="lg:mb-14">total : ${item.quantity * item.price}</p>
              <AiTwotoneDelete
                className="cursor-pointer w-9 h-9 mx-auto mt-2 lg:mt-0"
                onClick={() => dispatch(removeItem(item))}
              />
            </div>
          </div>
        ))}
              {/* sub total */}
        <div className="text-black bg-white w-full h-[150px] p-4 relative ">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg md:text-xl lg:text-2xl">
              sub total :{" "}
            </p>
            <span className="text-xl md:text-2xl lg:text-3xl">
              {totalPrice}$
            </span>
          </div>
          <div className="flex justify-center items-center ">
            <button
              className="bg-black p-2
              text-white capitalize shadow-lg shadow-black my-4  rounded-md  w-full absolute bottom-0"
            >
              checkout
            </button>
          </div>
        </div>
      </div>


    </>
  );
};

export default CartItems;
