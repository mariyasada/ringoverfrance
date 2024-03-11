import { createContext, useContext, useState, useEffect } from "react";
import { getUsers } from "../Users";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getUsers();
      if (result) {
        setUsers(result);
      }
    })();
  }, []);

  return (
    <TodoContext.Provider value={{ users, setUsers }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodos = () => useContext(TodoContext);

export { TodoProvider, useTodos };
