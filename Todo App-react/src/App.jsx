import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  function handleAddTodos(newTodo) {
    console.log("Adding todo:", newTodo);
    const newTodoList = [...todos, newTodo];
    console.log("New todo list:", newTodoList);
    setTodos(newTodoList);
  }
  function handleDeleteTodos(index) {
    console.log("Deleting todo at index:", index);
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    console.log("New todo list after delete:", newTodoList);
    setTodos(newTodoList);
  }
  function handleEditTodo(index) {
    console.log("Editing todo at index:", index);
    const valueTobeEdited = todos[index];
    console.log("Value to be edited:", valueTobeEdited);
    setTodoValue(valueTobeEdited);
    handleDeleteTodos(index);
  }
  return (
    <>
      <TodoInput
        handleAddTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList
        todos={todos}
        handleDeleteTodos={handleDeleteTodos}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
