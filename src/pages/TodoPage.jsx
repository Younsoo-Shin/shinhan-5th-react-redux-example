import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '~/store/reducers/todo';

export default function TodoPage() {
  /* 코드작성 */
  const todos = [];

  return (
    <div>
      <input type="text" />
      {cancelTodo && <button onClick={() => {}}>취소</button>}
      <button onClick={() => {}}>추가</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => {}}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
