import React from "react";

const Content = ({ endpoint, reverse }) => {

  return (
    <div className="max-w-[1640px] mx-auto px-6 my-8 ">
      <div
        className={
          reverse
            ? "flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-8"
            : "flex flex-col md:flex-row justify-between items-center gap-8"
        }
      >
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl text-[#03a9f4] my-2">
            {endpoint.heading}
          </h1>
          <p className="font-bold text-lg md:text-xl lg:text-2xl my-2">
            {endpoint.title}
          </p>
          <span className=" text-gray-700 leading-loose my-2">
            {endpoint.text}
          </span>
          <button className="block bg-black shadow-lg shadow-black p-2 rounded-lg capitalize text-white w-[200px] my-2 mx-auto">
            <a href={endpoint.url} target="_blank">
              {endpoint.btn}
            </a>
          </button>
        </div>
        <img
          src={endpoint.img}
          alt="img/img"
          className=" object-cover h-[15vh]   mb-8 rotate-[25deg] cursor-pointer hover:rotate-0"
        />
      </div>
    </div>
  );
};

export default Content;
