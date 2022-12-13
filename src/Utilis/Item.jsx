import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { addToCart, openCart } from "../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { truncate } from "lodash";
import { Link, useNavigate } from "react-router-dom";
const Item = ({ items }) => {
  const state = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <div className="max-w-[1640px] mx-auto  px-4">
      <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={` bg-gradient-to-r ${item.color} ${item.shadow} rounded-lg`}
          >
            {/* card */}

            <div className="flex justify-between items-center">
              <div>
                {/* text content*/}
                <div className="p-2">
                  <h2 className="text-white text-lg md:text-xl my-2 max-w-[120px]">
                  {truncate(item.title, { length: 30 })}
                  </h2>
                  <h2 className="text-white text-sm md:text-xl my-2 leading-loose max-w-[100px] sm:max-w-[600px] md:max-w-[700px]">
                    {truncate(item.text, { length: 50 })}
                  </h2>
                </div>
                {/* price and rate */}
                <div className="flex gap-6 items-center text-white my-2 p-2">
                  <p className="bg-white rounded-md p-1 text-black text-center">
                    {item.price}
                  </p>
                  <div className="flex items-center gap-2 ">
                    <span>{item.rating}</span>
                    <AiOutlineStar size={20} />
                  </div>
                </div>
                {/* cart and btn */}
                <div className="flex items-center gap-4 text-white mt-3 mb-4 p-2">
                  <BsFillCartCheckFill
                    size={30}
                    className="cursor-pointer"
                    onClick={() => handleAddToCart(item)}
                  />
                  <button
                    className=" rounded-md bg-white capitalize p-2  text-black"
                    onClick={() => handleByProcess(item)}
                  >
                    {item.btn}
                  </button>
                </div>
              <div className="p-2">
              <Link
              to={`/${item.id}`}
              className="font-bold bg-white p-2 rounded-md capitalize"
            >
              details
            </Link>
              </div>
              </div>

              <img
                src={item.img}
                alt="popular sales/img"
                className="w-1/3 object-cover  max-h-[200px] rounded-lg p-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
