import {configureStore} from "@reduxjs/toolkit"
import CartSlice from "./CartSlice.js"
import AuthSlice from "./AuthSlice.js"
import exploreProduct from "./exploreProduct.js";
const store = configureStore({
      reducer : {
            cart : CartSlice , 
            auth : AuthSlice , 
            exploreProduct , 
      }
}); 
export default store