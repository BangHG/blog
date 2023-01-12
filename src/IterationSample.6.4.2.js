// #6 컴포넌트 반복
// #6.4 응용 유동적인 데이터 렌더링

// #6.4.2 데이터 추가 기능 구현하기
import { useState } from 'react';

const IterationSample = () => {
  const [names, setName] = useState([
    { id: 1, text: '핸드폰' },
    { id: 2, text: '헤어핀' },
    { id: 3, text: '텀블러' },
    { id: 4, text: '마우스' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const nameList = names.map((name) => (
    <li key={name.id}>
      {name.id} : {name.text}
    </li>
  ));

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setName(nextNames);
    setInputText('');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter');
    onClick();
  };
  return (
    <div style={{ padding: '25px' }}>
      <input type="text" value={inputText} onChange={onChange} onKeyPress={onKeyPress} />
      <button onClick={onClick}>추가</button>
      내가친 텍스트 : {inputText}
      <ul>{nameList}</ul>
    </div>
  );
};
export default IterationSample;
