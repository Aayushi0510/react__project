import { createApi } from '@reduxjs/toolkit/query/react'
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export type InitialStateType = {
    isCollapsed: boolean;
  };

  
const initialState:InitialStateType={
    isCollapsed:false
}

const sideNavlayoutSlice=createSlice({
  name: "sidenavBar",
  initialState,
reducers:{
setIsCollapsed:(state, action: PayloadAction<boolean>)=>{
    state.isCollapsed=action.payload;
},
}
});

export const {setIsCollapsed}=sideNavlayoutSlice.actions;
export default sideNavlayoutSlice.reducer;