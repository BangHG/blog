import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReduxApple from './redux.apple';
import reportWebVitals from './reportWebVitals';
import ReduxApple from './redux.apple';
const root = ReactDOM.createRoot(document.getElementById('root'));

function reducer(currentState, action, payload) {
  const newState = { ...currentState };
  if (currentState === undefined) {
    return {
      number: 10,
      text: '글입니다..',
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

// let store = createStoreHook(reducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxApple></ReduxApple>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
