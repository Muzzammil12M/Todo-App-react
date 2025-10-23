import React from "react";
const TodoCard = (props) => {
  const { children, handleDeleteTodos, index, handleEditTodo } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            console.log("Edit button clicked for index:", index);
            handleEditTodo(index);
          }}
        >
          🖊️
        </button>
        <button
          onClick={() => {
            console.log("Delete button clicked for index:", index);
            handleDeleteTodos(index);
          }}
        >
          🗑️
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
