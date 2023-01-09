import { useReducer } from 'react';

function counterBtn(number, action) {
  switch (action.type) {
    case 'IN':
      return { value: number.value + 1 };
    case 'DE':
      return { value: number.value - 1 };
    case 'IN10':
      return { value: number.value + 10 };
    case 'DE10':
      return { value: number.value - 10 };
    default:
      return false;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(counterBtn, { value: 0 });
  return (
    <div>
      <p>현재값은 {state.value}</p>
      <button onClick={() => dispatch({ type: 'IN' })}> +1 </button>
      <button onClick={() => dispatch({ type: 'IN10' })}> +10 </button>
      <button onClick={() => dispatch({ type: 'DE' })}> -1 </button>
      <button onClick={() => dispatch({ type: 'DE10' })}> -10 </button>
    </div>
  );
};

export default Counter;
