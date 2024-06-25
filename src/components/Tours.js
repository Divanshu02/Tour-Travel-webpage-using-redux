import React from "react";
import data from "./data.js";
import Tour from "./Tour.js";
import "./Tours.css";
import { useDispatch, useSelector } from "react-redux";
import { LEFTTOURS,FILLTOURS } from "../Redux/Slices/countSlice.js";

const Tours = () => {
  const tours=useSelector(state=>state.toursData)
  const dispatch=useDispatch()
  // console.log(tours)

/*
  function removeTour(id) {
    console.log(id)
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    dispatch(LEFTTOURS(newTours))
  }
    */ 


  if (tours.length === 0) {
    return (
      <div className="ToursCont">
        <h1>No Tours Left</h1>
        <button className="ToursContbtn" onClick={()=>dispatch(FILLTOURS(data))} >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="plancont ">
        <h1 className="innerplancont"> Plan With us...</h1>
        <div className="ToursCont2 ">
          {tours.map((tour) => {
            return <Tour key={tour.id} tour={tour}  />;
          })}
        </div>
      </div>
    </>
  );
};

export default Tours;


