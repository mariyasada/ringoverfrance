import React from "react";
import { Link } from "react-router-dom";
import "../Home/home.css";

export const Home = () => {
  return (
    <div className="hero-image-container">
      <img
        alt="hero-section"
        src="https://ik.imagekit.io/qrhnvir8bf0/pexels-web-donut-19090_2SpBTD7Dz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673609312966"
      />
      <Link to="/store">
        <button className="explore"> Let's Explore</button>
      </Link>
    </div>
  );
};
