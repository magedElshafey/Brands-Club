import React from "react";

const Title = ({ title }) => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-6 my-7">
      <h1 className="font-bold text-2xl md:3xl lg:4xl">{title}</h1>
    </div>
  );
};

export default Title;
