import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
const ToDoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  return (
    <>
      <li>
        <div>
          <ListGroup.Item
            variant="info"
            style={
              ({ textTransform: "capitalize" },
              { height: "40px" },
              { fontSize: "20px" })
            }
          >
            {title}
          </ListGroup.Item>
        </div>
        <div>
          <Button
            className="remove-task-button"
            onClick={() => {
              removeTask();
            }}
            variant="danger"
          >
            Remove
          </Button>
        </div>
        <br></br>
      </li>
    </>
  );
};

export default ToDoItem;
