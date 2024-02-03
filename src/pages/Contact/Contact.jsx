import React from "react";
import "../Contact/contact.css";

const emailConstants = [
  { email: "support@kiscksup.com", title: "for any technical support" },
  { email: "info@kiscksup.com", title: "for more information" },
  { email: "feedback@kiscksup.com", title: "to send your feedback" },
  { email: "jobs@kiscksup.com", title: "to work with us" },
];
export const ContactPage = () => {
  return (
    <div className="contact-us-detail-container flex-center flex-column">
      <div className="details-with-mail flex-center flex-column">
        <h3 className="heading-md">REACH US AT</h3>

        {emailConstants.map((item) => {
          return (
            <div className="emails-detail" key={item.title}>
              <h4>{item.email}</h4>
              <span className="title">{item.title}</span>
            </div>
          );
        })}
      </div>
      <div className="social-media-icon-container flex-center flex-column">
        <p className="tagline">stay in touch</p>
        <div className="image-icons flex-center gap-sm">
          <img
            src="https://ik.imagekit.io/qrhnvir8bf0/twitter_3x_25ADz3FO5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673594155288"
            alt="twitter-profile"
          />
          <img
            src="https://ik.imagekit.io/qrhnvir8bf0/insta_2x_elDC2LFZ-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673594149235"
            alt="instagram-profile"
          />
          <img
            src="https://ik.imagekit.io/qrhnvir8bf0/facebook_2x_n6mdwEEAF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673594149238"
            alt="facebook-profile"
          />
        </div>
      </div>
    </div>
  );
};
