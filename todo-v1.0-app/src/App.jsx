import "./style.css";
import React from "react";
import Todo from "./Todo";

// Big problem thi ke mujhe ye puri application bnani thi
// Aab mujhe nhi ati puri application bnani
// Toh meine kha agar mujhe koi individual todo bnakr dede
// Toh meine n number of todo's bna lunga uss api ka use krke
// Aur unhe list mein showcase kardunga.

// Faith hai ki <Todo/> mujhe screen par 1 Todo bnakr de deta hai.
// Expectation hai mere se ke mein puri application bna dunga agar mujhe koi user se input la de aur usse meri app ki internal config. setup karde fir uss internal config. ka use with that Todo making Api ke sath karke mein apni expectaion ko achive kar lunga.
let id = 0;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  newTodo() {
    // prompt user to enter new todo
    const userInput = prompt("Enter new todo: ");
    // update app's internal configuration(state) todos populate it
    this.setState({
      todos: [
        ...this.state.todos,
        { text: userInput, id: id++, checked: false },
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
      <>
        {/* trigger to take know when to take input from the user */}
        <button
          className="add-new-todo-btn"
          onClick={() => {
            console.log(this);
            this.newTodo();
          }}
        >
          Add Todo
        </button>
        {/* 
          map over todos list and showcase them as a list
        */}
        {/*
         todo app's structure
         Bunch of todo's hein
         todo1
         todo2
         todo3
         todo4
         ...
        */}
        <div className="todos-outer-container">
          <ul className="todos-inner-container">
            {/* using my faith */}
            {this.state.todos.map((todo) => (
              <Todo
                key={todo.id}
                onToggle={() => this.toggleTodo(todo.id)}
                onDelete={() => this.deleteTodo(todo.id)}
                todo={todo}
              />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
