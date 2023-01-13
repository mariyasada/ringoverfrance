import React from "react";
import { teamMemberData } from "../../components/constants";
import { MemberCard } from "../../components/MemberCard/MemberCard";
import "../Team/team.css";

export const Team = () => {
  return (
    <div className="team-page-container ">
      <h2>
        Without bonding and coordination, every project is failure. Look at who
        makes KICKUP great. ;)
      </h2>
      <div className="grid-container">
        {teamMemberData.map((member) => {
          return <MemberCard member={member} key={member.name} />;
        })}
      </div>
      <h2>and you! ;)</h2>
    </div>
  );
};
