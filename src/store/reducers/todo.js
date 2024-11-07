import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';
// 초기상태
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      // 내부적으로 immer.js 사용. (immutable 유지 시켜준다.)
      // return 하지말자. (화살표함수에서는 return하면 정상적으로 동작하지 않을 수 있음.)
      state.todos.push({
        id: uuid4(),
        text: action.payload,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});
// action creator
export const { addTodo, removeTodo } = todoSlice.actions;
// reducer
export default todoSlice.reducer;
