import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/data";

const initialState = {
  value: 0,
  toursData: data,
  likedArr: [],
  unLikedArr: [],
};

const countSlice = createSlice({
  name: "slice-count",
  initialState,
  reducers: {
    LIKED: (state, action) => {
      state.value += 1;
      state.toursData[action.payload.id - 1].flag = true;

      let likedElements = action.payload.tours.filter((tour) => {
        return tour.id === action.payload.id;
      });
    //   console.log(likedElements)
      state.likedArr.push(likedElements)
},
    UNLIKED: (state, action) => {
      state.value -= 1;
      state.toursData[action.payload.id - 1].flag = false;
      console.log(action.payload.likedArr)
      let unlikedElements = action.payload.newTours.filter((tour) => {
        return tour.id!==action.payload.id;
      });
      console.log(unlikedElements,'unliked')
      state.likedArr=[]
      state.likedArr.push(unlikedElements)
    },
    LEFTTOURS: (state, action) => {
      state.toursData = action.payload;
    },
    FILLTOURS: (state, action) => {
      state.toursData = action.payload;
    },
    REMOVETOUR: (state, action) => {
      // console.log(action.payload)
      const newTours = action.payload.tours.filter((tour) => {
        return tour.id !== action.payload.id;
      });
      //   console.log(newTours)
      state.toursData = newTours;
    },
  },
});

export const { LIKED, UNLIKED, LEFTTOURS, FILLTOURS, REMOVETOUR } =
  countSlice.actions;
export default countSlice.reducer;
