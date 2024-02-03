import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Journey } from "../pages";
import "@testing-library/jest-dom";

describe("test journey page", () => {
  test("should render list of journey details", () => {
    render(
      <BrowserRouter>
        <Journey />
      </BrowserRouter>
    );
    const journeyItems = screen.getAllByTestId("journey-cards");
    expect(journeyItems.length).toBe(4);
  });
});
