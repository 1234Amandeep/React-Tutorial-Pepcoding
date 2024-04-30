import "./styles.css";
import Todo from "./components/Todo";
import React from "react";

let id = 0;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  newTodo() {
    const userInp = prompt("Enter new todo: ");
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: userInp,
          checked: false,
          id: id++,
        },
      ],
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id != id),
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id != id) return todo;
        todo.checked = !todo.checked;
        return todo;
      }),
    });
  }

  render() {
    return (
      <article className="todo-list-container">
        {/* add btn -> to add new todo */}
        <div className="btn-container">
          <button className="add-new-todo-btn" onClick={() => this.newTodo()}>
            Add todo
          </button>
        </div>
        {/* Using faith I can say */}
        <ul className="todo-list">
          {this.state.todos.map((todo) => (
            <Todo
              onDelete={() => this.deleteTodo(todo.id)}
              onToggle={() => this.toggleTodo(todo.id)}
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      </article>
    );
  }
}

export default App;
