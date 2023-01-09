// TODO: #6 컴포넌트 반복
// TODO: #6.4 응용 유동적인 데이터 렌더링

// TODO: #6.4.1 초기상태 설정하기
// TODO: #6.4.2 데이터 추가 기능 구현하기
// TODO: #6.4.3 데이터 제거 기능 구현하기

// TODO: #6.4.1 : 초기상태 설정하기
import { useState } from 'react';

const IterationSample = () => {
  const [names, setName] = useState([
    { id: 1, text: '핸드폰' },
    { id: 2, text: '헤어핀' },
    { id: 3, text: '텀블러' },
    { id: 4, text: '마우스' },
  ]);

  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);

  return (
    <div style={{ padding: '25px' }}>
      <ul>{nameList}</ul>
    </div>
  );
};
export default IterationSample;
