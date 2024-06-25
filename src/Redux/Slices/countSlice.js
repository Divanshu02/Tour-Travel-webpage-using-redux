import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/data";

const initialState={
    value:0,
    toursData:data,
    sliceFlag:false
}


const countSlice=createSlice({
    name:'slice-count',
    initialState,
    reducers:{
        LIKED:(state,action)=>{
            state.value+=1;
            console.log(initialState.toursData)
        },
        UNLIKED:(state,action)=>{
            state.value-=1;
        },
        LEFTTOURS:(state,action)=>{
            console.log(action.payload)
            state.toursData=action.payload
        },
        FILLTOURS:(state,action)=>{
            state.toursData=action.payload
        },
    }
})

export const {LIKED,UNLIKED,LEFTTOURS,FILLTOURS}=countSlice.actions;
export default countSlice.reducer;