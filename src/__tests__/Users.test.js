import axios from "axios";
import { Users } from "../Data/user";
import { getUsers } from "../Users";

jest.mock("axios");

describe("testing axios", () => {
  it("axios test", async () => {
    axios.get.mockResolvedValueOnce({ data: Users });
    const result = await getUsers();

    expect(axios.get).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/users`
    );
    expect(result).toEqual(Users);
  });
});
