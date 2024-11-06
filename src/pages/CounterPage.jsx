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
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>CounterPage</div>

      <div>
        {/* ColorInput */}
        <div>
          <input type="color" onChange={() => {}} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button>증가</button>
        <button>감소</button>
      </div>

      <div>
        <h3 style={{ color: counter.color }}>{counter.counter}</h3>
      </div>
    </div>
  );
}
