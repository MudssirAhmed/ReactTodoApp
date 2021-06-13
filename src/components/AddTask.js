import React, { useState } from "react";
import Icon from "react-hero-icon";

function AddTask({ addTodo }) {
  const [tod, setTod] = useState(false);
  const [todo, setTodo] = useState();

  const addClick = (e) => {
    console.log(tod);
    setTod(!tod);
  };

  const submit = (e) => {
    if (todo) {
      addTodo(todo);
    }
    setTod(!tod);
  };

  const cancel = (e) => {
    setTod(!tod);
  };

  return (
    <div>
      <div style={addTask} onClick={addClick}>
        <p>
          + <span>Add</span>
        </p>
      </div>

      <div style={tod ? { display: "block" } : { display: "none" }}>
        <div style={task}>
          <input
            type="text"
            name="title"
            className="inputTodo"
            placeholder="Add Todo..."
            onChange={(e) => setTodo(e.target.value)}
          />

          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={todayBanner}>
              <Icon icon="calendar" type="outline" color="#058527" />
              <span
                style={{
                  color: "#058527",
                  fontSize: "15px",
                  letterSpacing: "0.5px",
                }}
              >
                Today
              </span>
            </p>
            <p style={taskBanner}>
              <Icon icon="inbox-in" type="outline" color="#528CE3" />
              <span
                style={{
                  color: "#058527",
                  fontSize: "15px",
                  letterSpacing: "0.5px",
                }}
              >
                Task
              </span>
            </p>
          </div>
        </div>

        <div style={{ margin: "10px 10px" }}>
          <input
            type="submit"
            value="Add todo"
            style={Button.AddTodo}
            onClick={submit}
          />
          <input
            type="submit"
            value="Cancel"
            style={Button.CancelTodo}
            onClick={cancel}
          />
        </div>
      </div>
    </div>
  );
}

const Button = {
  AddTodo: {
    display: "inline-block",
    border: "none",
    background: "#555",
    color: "#fff",
    padding: "7px 20px",
    cursor: "pointer",
  },
  CancelTodo: {
    display: "inline-block",
    border: "none",
    color: "#fff",
    background: "#333",
    padding: "7px 20px",
    cursor: "pointer",
    marginLeft: "10px",
  },
};

const addTask = {
  padding: "5px 0px",
  width: "100%",
  color: "#333",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  marginTop: "5px",
  cursor: "pointer",
};

const todayBanner = {
  width: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid lightGray",
  borderRadius: "5px",
  margin: "10px",
};
const taskBanner = {
  width: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid lightGray",
  borderRadius: "5px",
  margin: "10px",
};

const task = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  marginTop: "10px",
};

export default AddTask;
