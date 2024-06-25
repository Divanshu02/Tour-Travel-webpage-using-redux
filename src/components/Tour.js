import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./Tours.css";
import { useDispatch, useSelector } from "react-redux";
import { LIKED, UNLIKED, REMOVETOUR } from "../Redux/Slices/countSlice";
import {  toast } from "react-toastify";

const Tour = (props) => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.toursData);
  let { id, name, info, image, price, flag } = props.tour;
  // console.log(tours)
  return (
    <div>
      <div className="random-cont">
        <div style={{ position: "relative" }}>
          {flag ? (
            <FaHeart
              style={{
                color: "lightblue",
                fontSize: "30px",
                cursor: "pointer",
                position: "absolute",
                right: "0px",
                top: "18rem",
              }}
              onClick={() => {
                dispatch(
                  UNLIKED({
                    id,
                    tours,
                  })
                );
                toast.warn("Disliked Succefully")
              }}
            />
          ) : (
            <FaRegHeart
              style={{
                color: "lightblue",
                fontSize: "30px",
                cursor: "pointer",
                position: "absolute",
                right: "0px",
                top: "18rem",
              }}
              onClick={() => {
                dispatch(
                  LIKED({
                    id,
                    tours,
                  })
                );
                toast.success("Liked Successfully")
              }}
            />
          )}

          <img
            src={image}
            style={{ width: "100%", height: "300px", marginBottom: 12 }}
            alt="tourpic"
          ></img>
          <p>{price}₹</p>
        </div>
        <div className="innerrandom-cont">
          <p>{name}</p>
          <p>{info}</p>
          <button
            className="tourbtn"
            onClick={() => dispatch(REMOVETOUR({ id, tours }))}
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
