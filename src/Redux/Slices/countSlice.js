import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/data";

const initialState={
    value:0,
    toursData:data,
}


const countSlice=createSlice({
    name:'slice-count',
    initialState,
    reducers:{
        LIKED:(state,action)=>{
            state.value+=1;
            
          state.toursData[action.payload.id-1].flag=true;
        },
        UNLIKED:(state,action)=>{
            state.value-=1;
            state.toursData[action.payload.id-1].flag=false;
        },
        LEFTTOURS:(state,action)=>{
            state.toursData=action.payload
        },
        FILLTOURS:(state,action)=>{
            state.toursData=action.payload
        },
        REMOVETOUR:(state,action)=>{
            // console.log(action.payload)
            const newTours = action.payload.tours.filter((tour) => {
                return tour.id !== action.payload.id;
              });
            //   console.log(newTours)
              state.toursData=newTours
        }
    }
})

export const {LIKED,UNLIKED,LEFTTOURS,FILLTOURS,REMOVETOUR}=countSlice.actions;
export default countSlice.reducer;