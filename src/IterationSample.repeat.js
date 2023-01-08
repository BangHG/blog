import { useState } from 'react';

const IterationSample = () => {
  const [names, setName] = useState([
    { text: 'A', id: 1 },
    { text: 'B', id: 2 },
    { text: 'C', id: 3 },
    { text: 'D', id: 4 },
  ]);

  const [input, setInput] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onClick = () => {
    // 배열넘기기
    const newList = names.concat({
      id: nextId,
      text: input,
    });
    setNextId(nextId + 1);
    setName(newList);
    setInput('');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  const onRemove = (id) => {
    // 삭제하기
    const removeList = names.filter((names) => names.id !== id);
    setName(removeList);
  };

  const nameList = names.map((names) => (
    <li
      key={names.id}
      onDoubleClick={() => {
        onRemove(names.id);
      }}
    >
      {names.text}
    </li>
  ));

  return (
    <div>
      <h1>반복테스트</h1>
      <input type='text' value={input} onKeyPress={onKeyPress} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
