import React from 'react';

export default function Counter() {
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
      <h1>카운터내용.</h1>
    </div>
  );
}
