import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '~/store/reducers/todo';

export default function TodoPage() {
  /* 코드작성 */
  // const todos = [];
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const inputRef = useRef();

  return (
    <div>
      <input type="text" ref={inputRef} />
      {/* {cancelTodo && <button onClick={() => {}}>취소</button>} */}
      <button onClick={() => {}}>취소</button>
      <button
        onClick={() => {
          const action = addTodo(inputRef.current.value);
          dispatch(action);
        }}
      >
        추가
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => {
                const action = removeTodo(todo.id);
                // dispatch({
                //   type: 'todo/REMOVE_TODO',
                //   payload: {
                //     id: todo.id,
                //   },
                // });
                dispatch(action);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
