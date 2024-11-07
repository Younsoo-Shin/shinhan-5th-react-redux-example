// selector
// dispatch
// actionCreator
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseCounter,
  decreaseCounter,
  setColor,
} from '~/store/reducers/counter';

export default function CounterPage() {
  // useSelector: Store의 State를 조회하는 Hook
  const counter = useSelector((state) => state.counter);
  console.log(counter);

  // dispatch: Action을 Reducer에 전달하는역할(제출하는역할)
  const dispatch = useDispatch();

  // State를 변경시키기 위해서
  //  1. action을 만들어야 한다.
  //  2. action객체를 reducer에 전달해야 한다. => dispatch

  return (
    <div>
      <div>CounterPage</div>

      <div>
        {/* ColorInput */}
        <div>
          <input
            type="color"
            onChange={(e) => {
              // const action = setColor(e.target.value);
              // dispatch(action);
              dispatch(setColor(e.target.value));
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button
          onClick={(e) => {
            // 1. action객체를 만든다. (action객체: type과 payload)
            const action = increaseCounter();
            // 2. action객체를 reducer에 전달한다. dispatch
            dispatch(action);
          }}
        >
          증가
        </button>
        <button
          onClick={() => {
            const action = decreaseCounter();
            dispatch(action);
          }}
        >
          감소
        </button>
      </div>

      <div>
        <h3 style={{ color: counter.color }}>{counter.counter}</h3>
      </div>
    </div>
  );
}
