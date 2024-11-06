import React from 'react';

// state를 조회
import { useSelector } from 'react-redux';

export default function Counter() {
  const counterState = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button>증가</button>
        <button>감소</button>
      </div>
      <div>
        <input type="text" />
      </div>
      <h1>{counterState.counter}</h1>
    </div>
  );
}
