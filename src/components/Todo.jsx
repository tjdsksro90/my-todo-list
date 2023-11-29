import React from "react";
import { useNavigate } from "react-router-dom";

function Todo({ todo, onDeleteHanlder, onEditHandler }) {
  const navigate = useNavigate();
  return (
    <div className="app-box" key={todo.id}>
      <div>
        <h3 className="todo-title">{todo.title}</h3>
        <div className="todo-body">{todo.body}</div>
      </div>
      <div className="btn-wrap">
        <button
          className="todo-delete-button button"
          onClick={() => onDeleteHanlder(todo.id)}
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
        <br />
        <button
          className="todo-complete-button button"
          onClick={() => navigate(`/${todo.id}`)}
        >
          상세보기
        </button>
      </div>
    </div>
  );
}

export default Todo;
