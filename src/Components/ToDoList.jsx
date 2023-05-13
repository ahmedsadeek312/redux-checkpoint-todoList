import React from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
const ToDoList = () => {
  const todoSelector = useSelector((state) => {
    return state.tasks;
  });
  return (
    <ol className="tasks-list">
      {todoSelector.map((todo) => (
        <ToDoItem id={todo.id} title={todo.name} completed={todo.status} />
      ))}
    </ol>
  );
};

export default ToDoList;
