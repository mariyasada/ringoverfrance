import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { NavBar } from "../components";
import { Home, Journey, Team } from "../pages";
import React, { useState } from "react";
import { act } from "react-dom/test-utils";

describe("testing navbar component", () => {
  // this is implementation how we can set mockusestate
  // const useStateMock = jest.fn();

  // jest.mock("react", () => ({
  //   ...jest.requireActual("react"),
  //   useState: jest.fn(),
  // }));

  test("should render navbar with all items", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    // checking the Ul element
    const ulElement = screen.getByTestId("nav-items");
    expect(ulElement).toBeInTheDocument();

    const { getAllByRole } = within(ulElement);
    const items = getAllByRole("link");
    expect(items.length).toBe(5);
  });

  it("navbar should have username", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const expectedText = screen.getByText("MARIYA");
    expect(expectedText).toBeInTheDocument();
  });

  test("clicking home link should render home page", () => {
    render(
      <BrowserRouter>
        <NavBar />
        <Home />
      </BrowserRouter>
    );
    // this is how we access link route href="/home"
    const homeLink = screen.getByText(/home/i);
    fireEvent.click(homeLink);

    // assert the home page content is rendered
    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Let's Explore");
  });
  test("clicking journey link should render journey page", () => {
    render(
      <BrowserRouter>
        <NavBar />
        <Journey />
      </BrowserRouter>
    );
    const journeyLink = screen.getByRole("link", { name: "THE JOURNEY" });
    fireEvent.click(journeyLink);

    // journeypage content is rendered or not
    const expectedText = screen.getByRole("heading", { name: "THE JOURNEY" });
    expect(expectedText).toBeInTheDocument();
  });
  test("clicking team link should render team page", () => {
    render(
      <BrowserRouter>
        <NavBar />
        <Team />
      </BrowserRouter>
    );

    //get team link first
    const journeyLink = screen.getByRole("link", { name: "TEAM" });
    fireEvent.click(journeyLink);

    // Teampage content is rendered or not
    const expectedText = screen.getByRole("heading", {
      name: "Without bonding and coordination, every project is failure. Look at who makes KICKUP great. ;)",
    });
    expect(expectedText).toBeInTheDocument();
  });
  test("humburger menu initially not present in application", async () => {
    // global.innerWidth = 380;

    await act(async () => {
      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );
    });

    const humburgerIcon = screen.getByTestId("humburger-icon");
    expect(humburgerIcon).toBeInTheDocument();

    const humburgerMenu = screen.queryByTestId("hamburger-menu");
    // Check that the menu is initially closed
    expect(humburgerMenu).not.toBeInTheDocument();

    fireEvent.click(humburgerIcon);

    // Assert that the menu is now open
    expect(screen.getByTestId("hamburger-menu")).toBeInTheDocument();

    // assert when click close icon

    // // Simulate clicking on the hamburger icon again to close the menu
    fireEvent.click(screen.getByTestId("humburger-cancel-icon"));

    // // Assert that the menu is now closed
    expect(screen.queryByTestId("hamburger-menu")).not.toBeInTheDocument();
  });
});
