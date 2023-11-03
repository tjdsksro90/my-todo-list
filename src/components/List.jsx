import React from "react";
import Todo from "./Todo";

function List({ todos, setTodos }) {
  // 삭제하기
  const onDeleteHanlder = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(newTodos);
  };

  // 취소, 삭제하기
  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodos);
  };

  return (
    <section className="app-reulst-box">
      <div className="app-result-inner">
        <h2>Working.. 🔥</h2>
        <div className="app-result">
          {todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  onDeleteHanlder={onDeleteHanlder}
                  onEditHandler={onEditHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="app-result-inner">
        <h2>Done..! 🎉</h2>
        <div className="app-result">
          {todos.map((todo) => {
            if (todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  onDeleteHanlder={onDeleteHanlder}
                  onEditHandler={onEditHandler}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default List;
