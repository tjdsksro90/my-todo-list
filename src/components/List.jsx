import React from "react";
import Todo from "./Todo";
import { useDispatch } from "react-redux";
import { removeTodo, switchTodo } from "redux/modules/todos";

function List({ todos }) {
  const dispatch = useDispatch();
  // 삭제하기
  const onDeleteHanlder = (todoId) => {
    // const newTodos = todos.filter((todo) => todo.id !== todoId);
    // setTodos(newTodos);
    dispatch(removeTodo(todoId));
  };

  // 취소, 삭제하기
  const onEditHandler = (todoId) => {
    // const newTodos = todos.map((todo) => {
    //   if (todo.id === todoId) {
    //     return {
    //       ...todo,
    //       isDone: !todo.isDone,
    //     };
    //   } else {
    //     return { ...todo };
    //   }
    // });
    // setTodos(newTodos);
    dispatch(switchTodo(todoId));
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
                  onDeleteHanlder={() => onDeleteHanlder(todo.id)}
                  onEditHandler={() => onEditHandler(todo.id)}
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
              return <Todo key={todo.id} todo={todo} />;
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
