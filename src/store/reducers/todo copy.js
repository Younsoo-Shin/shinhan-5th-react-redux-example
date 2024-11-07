// npm install uuid
import { v4 as uuid4 } from 'uuid';
// 1. initialState
const initialState = {
  todos: [], // 현재 todo배열.
};

// 2. action객체 정의
// action객체: 주문서. (type+payload)
const ADD_TODO = 'todo/ADD_TODO'; // todo를 추가하는 주문서(액션) 타입
const REMOVE_TODO = 'todo/REMOVE_TODO'; // todo를 제거하는 주문서(액션) 타입

// 2-1. action을 생성하는 actionCreator 함수.
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      text: text,
    },
  };
};
export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: {
      id: id,
    },
  };
};

// 3. reducer정의
export default function todoReducer(state = initialState, action) {
  // reducer: state와 action을 받아 새로운 state를 return하는 함수.
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uuid4(),
            text: action.payload.text,
          },
        ],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
}
