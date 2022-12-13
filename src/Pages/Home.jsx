import React from "react";
import Cart from "../Components/Cart/Cart";
import Content from "../Components/Content";
import Sales from "../Components/Sales";
import Slider from "../Components/Slider";
import {

  popularSales,
  toprateslaes,
  sneaker,
  highlight,
  story,
} from "../Data/Data.js";
const Home = () => {
  return (
    <div>
      <Sales endpoint={popularSales} />
      <Content endpoint={highlight} reverse={false} />
      <Sales endpoint={toprateslaes} />
      <Content endpoint={sneaker} reverse={true} />
      <Slider slides={story} />
      <Cart />
    </div>
  );
};

export default Home;
