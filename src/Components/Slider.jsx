import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FcLike } from "react-icons/fc";
import { AiOutlineClockCircle } from "react-icons/ai";
import Title from "../Utilis/Title";
import "@splidejs/react-splide/css";
import {truncate} from 'lodash'
const Slider = ({ slides }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="py-6">
      <Title title={slides.title} />
      <div>
        <Splide options={splideOptions}>
          {slides.news.map((item, index) => (
            <SplideSlide key={index} className="mb-0.5">
              <div
                className="grid items-center gap-4 pb-2 rounded-lg shadow
                               shadow-slate-200 ring-1 ring-slate-200"
              >
                <div>
                  <img
                    alt="img"
                    src={item.img}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                {/*icons */}
                <div className="flex justify-between items-center my-4 w-full px-1">
                  {/*like */}
                  <div className="flex items-center">
                    <FcLike size={20} className="cursor-pointer" />
                    <span className="font-bold">{item.like}</span>
                  </div>
                  {/* time*/}
                  <div className="flex items-center">
                    <AiOutlineClockCircle
                      size={20}
                      className="cursor-pointer"
                    />
                    <span className="font-bold">{item.time}</span>
                  </div>
                  <p className="font-bold text-[#2196f3]">#{item.by}</p>
                </div>
                {/*title */}
                <p className="font-bold mb-2 px-1 text-center">{item.title}</p>
                {/*text */}
                <p className=" text-gray-600 leading-loose px-1 text-center">
                  {truncate(item.text , {length: 100})}
                </p>
                <button className="text-white font-bold bg-black rounded-lg p-2 w-full shadow-md shadow-black">
                  <a href={item.url} target="_blank">
                    {item.btn}
                  </a>
                </button>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Slider;
