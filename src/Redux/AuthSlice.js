import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  authState: false,
  memebers: [],
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      state.authState = action.payload;
      
    },
    handleLogOut: (state, action) => {
      state.authState = action.payload;
      toast.success("you log out succesfully") ; 
    },
    addMembers: (state, action) => {
      state.memebers.push(action.payload);
      toast.success(
        `welcome ${action.payload.name} your account created succesfully`
      );
    },
  },
});
export const { handleLogin, handleLogOut , addMembers } = authSlice.actions;
export default authSlice.reducer;
