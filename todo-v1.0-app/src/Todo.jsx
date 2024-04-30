import React from "react";

export default function Todo(props) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={props.todo.checked}
          onChange={props.onToggle}
        />
        <button onClick={props.onDelete}>Delete</button>
        <span>{props.todo.text}</span>
      </li>
    </>
  );
}
