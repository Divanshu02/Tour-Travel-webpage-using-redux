import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaHeart } from 'react-icons/fa'; // Import the heart icon from Font Awesome


const Header = () => {
  const count = useSelector((state) => state.value);
  return (
    <div
      style={{
        backgroundColor: "rgb(247, 233, 216)",
        textAlign: "right",
        paddingRight: "20rem",
        paddingTop: "1rem",
      }}
    >
      <NavLink to='/likedItems'>
        <button
          className="hdr-btn"
          style={{
            padding: ".5em",
            borderRadius: "1em",
            border:'none',
            fontSize: "1em",
            cursor: "pointer",
          }}
        >
          <FaHeart style={{ color: 'red', fontSize: '1.8em' }} />
          <h5>{count}</h5>
        </button>
      </NavLink>
    </div>
  );
};

export default Header;
