import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "redux/modules/todos";
import { v4 as uuidv4 } from "uuid";

// let number = 2;

function Input({ todos, setTodos }) {
  // 추가하게 될 빈값 기본값
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  const [todo, setTodo] = useState(initialState);
  const dispatch = useDispatch();

  // input 입력값 변화 체크
  const onChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setTodo({ ...todo, [name]: value });
  };

  // list 추가하기
  const onSubmitHandler = () => {
    if (todo.title.trim() === "" || todo.body.trim() === "")
      alert("내용을 입력해주세요.");
    // setTodos([...todos, { ...todo, id: number }]);
    // setTodo(initialState);
    // number++;
    const newTodo = {
      id: uuidv4(),
      title: todo.title,
      body: todo.body,
      isDone: todo.isDone,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <section className="app-input-wrap">
      <div className="app-input-box">
        <div className="app-input-inner">
          <div className="app-input">
            <label htmlFor="input-title">제목</label>
            <input
              type="text"
              id="input-title"
              name="title"
              value={todo.title}
              onChange={onChangeHandler}
            />
          </div>
          <div className="app-input">
            <label htmlFor="input-body">내용</label>
            <input
              type="text"
              id="input-body"
              name="body"
              value={todo.body}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="app-button-inner">
          <button type="button" onClick={onSubmitHandler}>
            추가하기
          </button>
        </div>
      </div>
    </section>
  );
}

export default Input;
