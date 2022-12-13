import React, { useState, useEffect } from "react";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openCart } from "../Redux/CartSlice.js";
import { handleExplore } from "../Redux/exploreProduct.js";
import { handleLogOut } from "../Redux/AuthSlice.js";
const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 30) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const cartState = useSelector((state) => state.cart);

  return (
    <div
      className={`${
        nav
          ? "fixed top-0 left-0 right-0 h-auto w-full blur-effect-theme text-black z-[1000]"
          : "fixed top-0 left-0 right-0 h-auto  w-full  text-white"
      }`}
    >
      <div className="flex  justify-between gap-6 p-4">
        <div>
          <h1
            className=" font-extrabold text-lg md:text-4xl lg:text-5xl cursor-pointer"
            onClick={() => dispatch(handleExplore(true))}
          >
            <Link to="/">brands club</Link>
          </h1>
        </div>
        {/* icon*/}
        <div className="flex gap-2 md:gap-6 ">
          <Link to="/categories">
            <BiCategory size={30} />
          </Link>
          {state.authState ? (
            <AiOutlineLogout
              className=" cursor-pointer"
              size={30}
              onClick={() => dispatch(handleLogOut(false))}
            />
          ) : (
            <Link to="regester">
              <AiOutlineLogin size={30} />
            </Link>
          )}
          <MdOutlineFavorite size={30} className=" cursor-pointer" />
          <div className="flex flex-col gap-[1px] ">
            <BsFillCartCheckFill
              size={30}
              className="cursor-pointer"
              onClick={() => dispatch(openCart(true))}
            />
            <div className="bg-white w-[30px] h-[30px] rounded-[50%] p-1 text-center text-black">
              {cartState.cartItems.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
