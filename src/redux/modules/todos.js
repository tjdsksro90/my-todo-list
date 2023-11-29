import { v4 as uuidv4 } from "uuid";

// 1. action items
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

// 2. action creators
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// 3. initial State => reducer를 구성할 때
const initialState = [
  {
    id: uuidv4(),
    title: "리액트 기초 공부하기",
    body: "리액트 기초를 공부해봅시다.",
    isDone: true,
  },
  {
    id: uuidv4(),
    title: "리액트 중급 공부하기",
    body: "리액트 중급을 공부해봅시다.",
    isDone: false,
  },
];

// action creators를 만들었음!
// -->
// {
//   type: '',
//   payload: '',
// }

// 4. reducer를 만들 것
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return { ...item };
        }
      });
    default:
      return state;
  }
};

// 5. reducer를 export
export default todos;
