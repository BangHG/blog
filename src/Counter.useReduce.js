// #8 Hooks
// #8.3 useReducer
// #8.3.1 카운터 구현하기
import { useReducer } from 'react';

// function counterBtn(현재값, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { value: 현재값.value + 1 };
//     case 'DECREMENT':
//       return { value: 현재값.value - 1 };
//     default:
//       return false;
//   }
// }
// function
// const Counter = () => {
//   // const [현재값, 액션값] = useReducer(실행할 함수이름, 초깃값);
//   // 액션값을 꼭 타입을 가지고 있지 않아도 됩니다(문자열, 숫자여도 된다)
//   const [현재값, 캐치] = useReducer(counterBtn, { value: 0 });
//   return (
//     <div>
//       <p> 현재값은 {현재값.value}입니다.</p>
//       <button onClick={() => 캐치({ type: 'INCREMENT' })}> + 1</button>
//       <button onClick={() => 캐치({ type: 'DECREMENT' })}> - 1</button>
//     </div>
//   );
// };

function counterReducer(state, action) {
  switch (action.type) {
    case 'PLUS':
      return { value: state.value++ };
    case 'MINUS':
      return { value: state.value-- };
    case 'DIVIDE':
      return { value: state.value / 2 };
    case 'MULTIPLE':
      return { value: state.value * 2 };
    case 'CEIL':
      return { value: Math.ceil(state.value) };
    default:
      return state.value;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { value: 100 });
  return (
    <div>
      <h1>현재값은 {state.value}</h1>
      <div style={{ display: 'flex', gap: '5px' }}>
        <button onClick={() => dispatch({ type: 'PLUS' })}>+ 1</button>
        <button onClick={() => dispatch({ type: 'MINUS' })}>- 1</button>
        <button onClick={() => dispatch({ type: 'MULTIPLE' })}>× 2</button>
        <button onClick={() => dispatch({ type: 'DIVIDE' })}>÷ 2</button>
        <button onClick={() => dispatch({ type: 'CEIL' })}>CEIL</button>
      </div>
    </div>
  );
};
export default Counter;
