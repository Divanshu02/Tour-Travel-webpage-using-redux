import React from "react";
import styles from "./LikedItems.module.css";
import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon from Font Awesome
import { NavLink } from "react-router-dom";

const LikedItems = () => {
  let likedItems = useSelector((state) => state.likedArr);
  let tours = [];
  likedItems.forEach((likedItem) => {
    likedItem.forEach((tour) => {
      tours.push(tour);
    });
  });
  // console.log(tours, "tour");
  // console.log(likedItems)
  return (
    <>
      <NavLink to='/'>
        <FaArrowLeft style={{ color: "black", fontSize: "24px" }} />{" "}
        {/* Apply styling to the icon */}
      </NavLink>

      <h2
        style={{
          textAlign: "center",
          fontWeight: "lighter",
          marginBottom: "2rem",
        }}
      >
        Saved Tours...
      </h2>
      <div className={styles.liked_container}>
        {tours.map((tour) => {
          let { id, name, info, image, price, flag } = tour;
          return (
            <div className={styles.liked_tour}>
              <img src={image} style={{ width: "100%", height: "300px" }}></img>
              <div>
                <h3>{price}₹</h3>
                <h3>{name}</h3>
              </div>
              <p>{info}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LikedItems;
