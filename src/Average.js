// #8.4 useMemo

import { useMemo, useState } from 'react';

const getAverage = (numbers) => {
  console.log('평균계산중');
  if (numbers.length === 0) {
    return 0;
  }

  // const list = numbers.concat();
  // console.log(list);
  const sum = numbers.reduce((a, b) => a + b);
  // reduce : 누산기..?
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState();

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      onInsert();
    }
  };

  const avg = useMemo(() => getAverage(list), [list]);
  // const avg = useMemo(()=>getAverage(list),[지켜볼대상]);
  // # 특정값이 바뀌었을때만 연산을 실행하게한다! 최적화 hook

  return (
    <div>
      <input type="number" onChange={onChange} value={number} onKeyUp={onKeyUp} />
      <button onClick={onInsert}>등록</button>

      <ul style={{ maxHeight: '50vh', border: '1px solid #ddd', overflow: 'auto' }}>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      {/* <div>평균값 = {getAverage(list)}</div> */}
      {/* 
       위 함수는 input의 값이 바뀔때마다 연산을 실행한다.
       ->  
       useMemo Hook을 이용하면 해당대상의 값에 변동이 있을 때만 함수를 실행한다!
       */}
      <div>평균값 = {avg}</div>
    </div>
  );
};

export default Average;
