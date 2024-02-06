import React from "react";
import { useTodos } from "../context/Todocontext";

const Todo = () => {
  const { users } = useTodos();
  return (
    <div>
      {users?.length > 0 &&
        users?.map((user) => (
          <span data-testid="users" key={user.id}>
            {user.name}
          </span>
        ))}
    </div>
  );
};

export default Todo;
