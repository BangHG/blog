// #8 Hooks
// #8.1 useState
import { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  // const [현재값, 상태설정함수] = useState(초깃값)

  return (
    <div>
      <p> 현재값은 {value}입니다.</p>
      <button onClick={() => setValue(value + 1)}> + 1</button>
      <button onClick={() => setValue(value - 1)}> - 1</button>
    </div>
  );
};

export default Counter;
