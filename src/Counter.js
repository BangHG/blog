// #8 Hooks
// #8.3 useReducer
// #8.3.1 카운터 구현하기
import { useReducer } from 'react';

function counterBtn(현재값, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: 현재값.value + 1 };
    case 'DECREMENT':
      return { value: 현재값.value - 1 };
    default:
      return false;
  }
}
// function
const Counter = () => {
  // const [현재값, 액션값] = useReducer(실행할 함수이름, 초깃값);
  // 액션값을 꼭 타입을 가지고 있지 않아도 됩니다(문자열, 숫자여도 된다)
  const [현재값, 캐치] = useReducer(counterBtn, { value: 0 });
  return (
    <div>
      <p> 현재값은 {현재값.value}입니다.</p>
      <button onClick={() => 캐치({ type: 'INCREMENT' })}> + 1</button>
      <button onClick={() => 캐치({ type: 'DECREMENT' })}> - 1</button>
    </div>
  );
};

export default Counter;
