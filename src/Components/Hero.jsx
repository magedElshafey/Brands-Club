import React  from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import {handleExplore} from '../Redux/exploreProduct'
import { useDispatch , useSelector } from "react-redux";
const Hero = ({ heroApi }) => {
      const dispatch = useDispatch() ; 
      const state = useSelector((state) => state.exploreProduct)
      
  return (
    <div className="relative w-auto h-auto ">
      <div className=" absolute top-0 left-0 right-0 z-10 bg-theme clip-path w-auto  h-[45vh]"></div>
      {/* container*/}
      <div className=" relative max-w-[1640px]  mx-auto px-4 z-50">
        {/* nav */}
        <Nav/>
        {/* text content */}
        <div className=" pt-20 md:pt-28 text-white text-center  ">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl mb-5">
            {heroApi.title}
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl mb-5">
            {heroApi.subtitle}
          </h1>

          <Link
            to="/products"
            className={`${
                  state.explore
                ? "bg-white p-2 text-black rounded-lg max-w-[200px] text-xl"
                : " invisible"
            }`}
            onClick={() => dispatch(handleExplore(false))}
          >
            {" "}
            {heroApi.btntext}
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center py-4 items-center ">
          <img
            src={heroApi.heroimg}
            alt="hero/img"
            className="h-[10vh] sm:h-[17vh] md:h-[30vh] lg:h-[35vh] w-auto cursor-pointer duration-[0.3s]  object-fill -rotate-[25deg] hover:rotate-0 mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
