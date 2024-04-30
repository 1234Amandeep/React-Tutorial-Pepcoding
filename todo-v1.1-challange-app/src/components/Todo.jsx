import React from "react";

export default function Todo(props) {
  return (
    <li>
      {/* checkbox -> todo done or not */}
      <input
        type="checkbox"
        checked={props.todo.checked}
        onChange={props.onToggle}
      />
      {/* deleteBtn -> todo delete that specific todo */}
      <button className="del-btn" onClick={props.onDelete}>
        delete
      </button>
      {/* task */}
      <span className="task">{props.todo.text}</span>
    </li>
  );
}
