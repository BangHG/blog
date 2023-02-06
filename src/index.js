import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function reducer(currentState, action, payload) {
  const newState = { ...currentState };
  if (currentState === undefined) {
    return {
      number: 10,
      reduxText: '글입니다..',
    };
  }

  if (action.type === 'PLUS') {
    newState.number += 5;
    return newState;
  } else if (action.type === 'MINUS') {
    newState.number -= 5;
    return newState;
  } else if (action.type === 'MULTIPLE') {
    newState.number *= 5;
    return newState;
  } else if (action.type === 'DIVIDE') {
    newState.number /= 5;
    return newState;
  } else if (action.type === 'TYPING') {
    // console.log();
    // newState.text = '';
    // newState.text
    // FIXME: input에 친것을 가져오고싶다.
    return newState;
  } else {
    return newState;
  }
}

let store = createStore(reducer);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
