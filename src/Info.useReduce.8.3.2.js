// #8.3 useReducer
// #8.3.1 카운터 구현하기
// #8.3.2 인풋 상태 관리하기

// "리듀서" 단어의 뜻에 대해..
// http://disq.us/p/27xv1y0

import { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
    // [#4.2.4 input 여러개 다루기] 예제와 비슷하다.
  };
}

// function reducer(state,action){
//   return{
//     ...state,
//     [action.name] : action.value
//   }
// }
const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    message: '',
  });

  const { name, message } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <input type="text" name="name" value={name} onChange={onChange} />
      <input type="text" name="message" value={message} onChange={onChange} />

      <p>
        내 이름은 {name},
        <br />할 말은 {message}.
      </p>
    </div>
  );
};

export default Info;
