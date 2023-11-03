import React, { useState } from "react";
import List from "../components/List";
import Input from "../components/Input";
import "../App.css";

function TodoList() {
  // 기존 최초 배열
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트 기초 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
    {
      id: 1,
      title: "리액트 중급 공부하기",
      body: "리액트 중급을 공부해봅시다.",
      isDone: false,
    },
  ]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Todo List</h1>
        <div>React</div>
      </header>
      <main className="app-main">
        <Input todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}

export default TodoList;
