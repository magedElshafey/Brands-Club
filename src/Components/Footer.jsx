import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-theme text-white p-2 mt-10 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 ">
        <h1 className="font-bold text-3xl">brands club</h1>
        <div className="flex items-center gap-5">
          <FaFacebook size={30} />
          <AiFillYoutube size={30} />
          <BsLinkedin size={30} />
          <AiFillTwitterCircle size={30} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 my-4 text-center">
        <ul>
          <li className="mb-3">About</li>
          <li className="mb-3">Partnership</li>
          <li className="mb-3">Careers</li>
          <li className="mb-3">Newsroom</li>
          <li className="mb-3">Advertising</li>
        </ul>
        <ul>
          <li className="mb-3">Home</li>
          <li className="mb-3">Top rated</li>
          <li className="mb-3">Top Stories</li>
          <li className="mb-3">Popular sales</li>
          <li className="mb-3">Advertising</li>
        </ul>
      </div>
      <p className="text-sm md:text-center my-2">
        Copyright<sup className="text-base font-bold">&copy;</sup> All Reserved
        Rights <span className="font-semibold">MAGED ELSHAFEY 2022</span>
      </p>
    </div>
  );
};

export default Footer;
