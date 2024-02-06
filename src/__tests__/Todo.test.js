import Todo from "../components/Todo";
import { TodoProvider } from "../context/Todocontext";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { getUsers } from "../Users";
import { Users as users } from "../Data/user";
import axios from "axios";

jest.mock("axios");

describe("testing axios again", () => {
  it("does context have all data or not", async () => {
    axios.get.mockResolvedValueOnce({ data: users });
    const result = await getUsers();
    expect(result.length).toBe(10); // Ensure the correct length based on your data
  });

  it("context testing", async () => {
    const { getByText } = render(
      <TodoProvider value={{ users }}>
        <Todo />
      </TodoProvider>
    );

    console.log(screen.debug());
    // Use waitFor to wait for the component to finish rendering and any asynchronous operations to complete
    await waitFor(() => {
      expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    });
  });
});
