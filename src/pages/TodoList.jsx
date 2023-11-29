import React, { useState } from "react";
import { useSelector } from "react-redux";
import List from "../components/List";
import Input from "../components/Input";
import "../App.css";
import { useNavigate } from "react-router-dom";

function TodoList() {
  // 기존 최초 배열
  // const [todos, setTodos] = useState([
  //   {
  //     id: 0,
  //     title: "리액트 기초 공부하기",
  //     body: "리액트 기초를 공부해봅시다.",
  //     isDone: true,
  //   },
  //   {
  //     id: 1,
  //     title: "리액트 중급 공부하기",
  //     body: "리액트 중급을 공부해봅시다.",
  //     isDone: false,
  //   },
  // ]);

  // store에 있는 todos를 가지고 옴
  const todos = useSelector((state) => state.todos);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Todo List</h1>
        <div>React</div>
      </header>
      <main className="app-main">
        <Input todos={todos} />
        <List todos={todos} />
      </main>
    </div>
  );
}

export default TodoList;
