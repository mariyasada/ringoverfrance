import axios from "axios";

export const getUsers = async () => {
  try {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return result.data;
  } catch (err) {
    console.log(err, "something went wrong");
  }
};
