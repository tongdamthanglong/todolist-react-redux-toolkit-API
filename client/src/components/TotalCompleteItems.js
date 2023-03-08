import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return (
    <h4 className="mt-3">
      {!todos.length
        ? "Please add a task and get things done.."
        : `Wow, you have completed ${todos.length} tasks in total! `}
    </h4>
  );
};

export default TotalCompleteItems;
