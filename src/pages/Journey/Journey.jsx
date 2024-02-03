import React from "react";
import { journeyDetails } from "../../components/constants";
import { ProgressBar } from "../../components/index";
import "../Journey/journey.css";

export const Journey = () => {
  return (
    <div className="journey-detail-container flex-center flex-column">
      <div className="section-image">
        <img
          alt="journey-profile"
          src="https://ik.imagekit.io/qrhnvir8bf0/grasspic_E8DKsVMkGm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673594149467"
        />
        <h1 className="title-journey">THE JOURNEY</h1>
      </div>
      <div className="journey-story-container flex-center">
        <ProgressBar />
        <div className="details-container flex-center flex-column">
          {journeyDetails.map((data) => {
            return (
              <div
                className="detail"
                key={data.title}
                data-testid="journey-cards"
              >
                <h4 className="journey-title">{data.title}</h4>
                <p className="description">{data.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="extra-div"></div> */}
    </div>
  );
};
