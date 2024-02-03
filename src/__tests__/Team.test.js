import { BrowserRouter } from "react-router-dom";
import { Team } from "../pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemberCard } from "../components/MemberCard/MemberCard";
import { teamMemberData } from "../components/constants";

describe("test team page test cases", () => {
  test("team page should render 4 cards", () => {
    render(
      <BrowserRouter>
        <Team />
      </BrowserRouter>
    );
    const teamMembers = screen.getAllByTestId("member-cards");
    expect(teamMembers.length).toBe(5);
  });

  test("Member card should render properly", () => {
    render(
      <BrowserRouter>
        <MemberCard member={teamMemberData[0]} />{" "}
      </BrowserRouter>
    );
    const expectedText = screen.getByText("Zidane");
    expect(expectedText).toBeInTheDocument();
  });
});
