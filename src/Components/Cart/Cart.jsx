import React from "react";
import CartCounter from "./CartCounter";
import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Cart = () => {
  const state = useSelector((state) => state.cart);
  return (
    <div
      className={`${
        state.cartState
          ? "fixed top-0 right-0 w-[80%] h-screen blur-effect-theme duration-300 overflow-y-scroll scroll-smooth scroll-hidden"
          : "fixed top-0 right-0 w-[80%] h-screen blur-effect-theme duration-300 translate-x-[100%] overflow-y-scroll scroll-smooth scroll-hidden"
      }`}
    >
      <CartCounter items={state.cartItems} />
      {state.cartItems.length ? (
        <CartItems items={state.cartItems} />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
