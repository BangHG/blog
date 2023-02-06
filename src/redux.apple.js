// /*
// 코딩애플 리덕스 강의
// https://www.youtube.com/watch?v=QZcYz2NrDIs

// 리덕스를 쓰는 이유!!

// 1.프롭스가 귀찮다!
//   store에서 한번에 끌어다쓸 수 있다 (useSelector <-> Provider)

// 2. 상태관리를 위해 쓴다. (reducer <-> dispatch)
// 한 영역에서 모든 컴포넌트에서의 코드를 정의해놓을 수 있다 (추적이 쉽다)

// */

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

function ReduxApple() {
  // const number = useSelector((state) => state);
  // const text = useSelector((text) => text);
  // useSelector는 redux에서 상태를 불러오는것
  // number는 redux에서 state임니다

  const dispatch = useDispatch();

  const number = useSelector((state) => state.number);
  const reduxText = useSelector((state) => state.reduxText);

  const [value, setValue] = useState(reduxText);

  return (
    <div>
      <h1>
        숫자는 {number}
        <br />
        글은 "{reduxText}"
        <br />
        지금 쓴 글은 {value}
      </h1>
      {/* <div>
        <form action="#" style={{ display: 'flex', margin: '10px auto' }}>
          <input type="text" value={value} onChange={onChange} />
        </form>
      </div> */}
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={() => dispatch({ type: 'PLUS' })}>Plus 5</button>
        <button onClick={() => dispatch({ type: 'MINUS' })}>Minus 5</button>
      </div>
    </div>
  );
}

export default ReduxApple;
