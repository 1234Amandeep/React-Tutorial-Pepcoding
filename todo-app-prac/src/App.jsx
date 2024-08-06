import "./style.css";
import Todos from "./Components/Todos";
import TodoInput from "./Components/TodoInput";

function App() {
  return (
    <>
      <h1 className="pt-5 text-center">Todo's</h1>
      <TodoInput />
      <Todos />
    </>
  );
}

export default App;
