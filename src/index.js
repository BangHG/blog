// /*
// 코딩애플 리덕스 강의
// https://www.youtube.com/watch?v=QZcYz2NrDIs

// 리덕스를 쓰는 이유!!

// 1.프롭스가 귀찮다!
//   store에서 한번에 끌어다쓸 수 있다 (useSelector <-> Provider)

// 2. 상태관리를 위해 쓴다. (reducer <-> dispatch)
// 한 영역에서 모든 컴포넌트에서의 코드를 정의해놓을 수 있다 (추적이 쉽다)

// */

import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './redux.apple';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));

const 변수 = 50;

// function reducer(state = 변수, action) {
//   if (action.type === 'PLUS') {
//     state += 5;
//     return state;
//   } else if (action.type === 'MINUS') {
//     state -= 5;
//     return state;
//   } else {
//     return state;
//   }
// }

function reducer(state = 변수, action) {
  if (action.type === 'PLUS') {
    state += 5;
    return state;
  } else if (action.type === 'MINUS') {
    state -= 5;
    return state;
  } else {
    return state;
  }
}

let store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
