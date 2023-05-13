import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";

const AddToDo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      Swal.fire({
        icon: "error",
        title: "hey!",
        text: "make sure your input is not empty",
        footer: 'be careful ',
      });
      setValue("");
      return;
    }
    dispatch(
      addTask({
        task: value,
      })
    );
    setValue("");
  };

  return (
    <>
      <div className="add-todo">
        <InputGroup
          className="mb-3"
          placeholder="please be sure that your task is not empty!"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        >
          <InputGroup.Text id="inputGroup-sizing-default">
            Add your Task :
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <Button variant="primary" type="submit" onClick={onSubmit}>
          Submit
        </Button>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default AddToDo;
