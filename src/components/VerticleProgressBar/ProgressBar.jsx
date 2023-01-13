import React from "react";
import "../VerticleProgressBar/progressbar.css";

export const ProgressBar = () => {
  return (
    <div className="progressbar flex-center flex-column">
      <span className="circle"></span>
      <span className="line"></span>
      <span className="circle"></span>
      <span className="line"></span>
      <span className="circle"></span>
      <span className="line"></span>
      <span className="circle"></span>
    </div>
  );
};
