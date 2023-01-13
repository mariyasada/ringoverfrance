import React from "react";
import "../MemberCard/membercard.css";

export const MemberCard = ({ member }) => {
  const {
    profile,
    name,
    role,
    isLinkedIn,
    isMedium,
    isFacebook,
    isBehance,
    isFootball,
  } = member;
  return (
    <div className="member-card-container flex-center flex-column">
      <div className="image-container">
        <img src={`${profile}`} alt={name} />
      </div>
      <div className="card-details flex-center flex-column">
        <h4 className="member-name">{name}</h4>
        <span className="member-role"> {role}</span>
        <div className="social-media-icon-container flex-center gap-sm mt-sm">
          {isLinkedIn && (
            <img
              src="https://ik.imagekit.io/qrhnvir8bf0/linkedin_rKff6WXK6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673594153335"
              alt="linkedin-profile"
            />
          )}
          {isMedium && (
            <img
              src="https://ik.imagekit.io/qrhnvir8bf0/medium_ykEaPCriG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673594153701"
              alt="medium-profile"
            />
          )}
          {isFacebook && (
            <img
              src="https://ik.imagekit.io/qrhnvir8bf0/facebook_3x_M1CyUpUKrm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673594149363"
              alt="facebook-profile"
            />
          )}
          {isFootball && (
            <img
              src="https://ik.imagekit.io/qrhnvir8bf0/nba_kRLPWYPKdV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673594153658"
              alt="football-profile"
            />
          )}
          {isBehance && (
            <img
              src="https://ik.imagekit.io/qrhnvir8bf0/behance-logo_h7yJHcYGn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673619940920"
              alt="behance-profile"
            />
          )}
        </div>
      </div>
    </div>
  );
};
