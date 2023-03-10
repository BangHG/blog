// #6 컴포넌트 반복
// #6.4 응용 유동적인 데이터 렌더링
// #6.4.3 데이터 제거 기능 구현하기
import { useState, useCallback } from 'react';

const IterationSample = () => {
  const [names, setName] = useState([
    { id: 1, text: '핸드폰' },
    { id: 2, text: '헤어핀' },
    { id: 3, text: '텀블러' },
    { id: 4, text: '마우스' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할때 사용할 id

  const onChange = useCallback((e) => setInputText(e.target.value), [inputText]);
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.id} : {name.text}
    </li>
  ));
  const onRemove = (id) => {
    const nextNames = names.filter((names) => names.id !== id);
    // names에서 필터한다. 네임은? name의id와 클릭한 것이 같은 것을 제외하고 다시만든다!
    // 쉽게말해서 클릭한 것의 id와 동일한 것을 가진넘을 빼라. (다른 요소로 해도되는데 id가 젤 짧자나)

    setName(nextNames);
  };

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
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div style={{ padding: '25px' }}>
      <input style={{ padding: '0.5em' }} type="text" value={inputText} onChange={onChange} onKeyDown={onKeyPress} />
      <button style={{ padding: '0.5em' }} onClick={onClick}>
        추가
      </button>
      <span style={{ marginLeft: '1em' }}>내가친 텍스트 : {inputText}</span>
      <ul style={{ margin: '1em' }}>{nameList}</ul>
    </div>
  );
};
export default IterationSample;
