import { BrowserRouter } from "react-router-dom";
import { ContactPage } from "../pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("contact page test case", () => {
  test("contact page should render properly", () => {
    render(
      <BrowserRouter>
        <ContactPage />
      </BrowserRouter>
    );
    const emailonscreen = screen.getByText("info@kiscksup.com");
    expect(emailonscreen).toBeInTheDocument();

    const expectedText = screen.getByText("stay in touch");
    expect(expectedText).toBeInTheDocument();
  });
});
