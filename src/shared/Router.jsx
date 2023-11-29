import Detail from "pages/Detail";
import TodoList from "pages/TodoList";
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<TodoList />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
