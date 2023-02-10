// https://www.youtube.com/watch?v=yjuwpf7VH74&t=3s 생활코딩 redux강의 따라가기
import React, { useState } from 'react';
import './reducer.scss';

import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createStore } from '@reduxjs/toolkit';

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }

  const newState = { ...currentState };

  // dispatch 사용하기
  if (action.type === 'PLUS') {
    newState.number++;

    // console.log(number);
  }

  return newState;
}

// createStore로 저장공간을 만들고 리듀서를 넣는다 (reduxjs/toolkit 내장함수)
const store = createStore(reducer); //스토어 생성

export default function App() {
  // const [number, setNumber] = useState(1);

  return (
    <div id="container">
      <h1>Root : </h1>

      {/* provider는 store를 정의해줘야한다! */}
      <Provider store={store}>
        <Left1></Left1>
        <Right1></Right1>
      </Provider>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h2>Left1 </h2>
      <Left2 />
    </div>
  );
}

function Left2(props) {
  // useSeletor는 함수를 인자로 받는다!!

  // 1. 이렇게 함수처리해주거나
  // function f(state) {
  //   return state.number;
  // }

  // const number = useSelector(f);
  // 2. 내부에서 함수를 돌려준다.

  const number = useSelector((state) => state.number);
  // console.log(number);
  return (
    <div>
      <h2>Left2 : {number}</h2>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h2>Right1</h2>
      <Right2 />
    </div>
  );
}

function Right2(props) {
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2>Right2 </h2>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'PLUS' });
        }}
      >
        Plus
      </button>
    </div>
  );
}
