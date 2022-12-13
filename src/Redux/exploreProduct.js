import { createSlice } from "@reduxjs/toolkit";
const initialState = {explore : true} ; 
const exploreProduct = createSlice({
      name : 'exploreProduct' , 
      initialState , 
      reducers : {
            handleExplore : (state , action ) => {
                  state.explore = action.payload
            }
      }
}) ; 
export const {handleExplore} = exploreProduct.actions ; 
export default exploreProduct.reducer ; 