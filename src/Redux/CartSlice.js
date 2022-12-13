import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  cartState: false,
  cartItems: window.localStorage.getItem("cartItems")
    ? JSON.parse(window.localStorage.getItem("cartItems"))
    : [],
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    openCart: (state, action) => {
      state.cartState = action.payload;
    },
    closeCart: (state, action) => {
      state.cartState = action.payload;
    },
    addToCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.cartItems[index].quantity += 1;
        toast.success(`item QTY increased`);
      } else {
        const temp = { ...action.payload, quantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to cart`);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItem: (state, action) => {
      const newState = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newState;
      window.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} removed from the cart`);
    },
    clearCart: (state) => {
      state.cartItems = [];
      window.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success("cart cleard successfully ");
    },
    decreaseQTY: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[index].quantity > 0) {
        state.cartItems[index].quantity -= 1;
        toast.success(`item QTY decreased`);
      }
    },
    increaseQTY: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[index].quantity >= 0) {
        state.cartItems[index].quantity += 1;
        toast.success(`item QTY increased`);
      }
    },
      
  },
});
export const {
  openCart,
  closeCart,
  addToCart,
  decreaseQTY,
  increaseQTY,
  removeItem,
  clearCart,

} = cartSlice.actions;
export default cartSlice.reducer;
