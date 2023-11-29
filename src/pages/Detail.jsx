import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const paramId = useParams().id;

  const todos = useSelector((state) => state.todos);
  const filteredTodo = todos.filter((item) => item.id === paramId)[0];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Todo List Detail</h1>
        <div>React</div>
      </header>
      <main className="app-main">
        <section className="app-reulst-box" style={{ marginTop: "20px" }}>
          <div className="app-result-inner">
            <div className="app-result">
              <div className="app-box" key={filteredTodo.id}>
                <div>
                  <h3 className="todo-title">{filteredTodo.title}</h3>
                  <div className="todo-body">{filteredTodo.body}</div>
                  <div className="todo-body">
                    완료여부: {filteredTodo.isDone.toString()}
                  </div>
                </div>
                <div className="btn-wrap">
                  <button
                    className="todo-complete-button button"
                    onClick={() => navigate("/")}
                  >
                    뒤로가기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Detail;
