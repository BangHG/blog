// #8.6 useRef 사용하기 : ref 는 DOM을 꼭 직접 건드려야할 때 사용합니다. (5장 143p)

import { useMemo, useState, useCallback, useRef } from 'react';

const getAverage = (numbers) => {
  console.log('평균계산중');
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]); //list는 빈배열.
  const [number, setNumber] = useState('');
  const inputEl = useRef(null); //## useRef 선언!

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      if (number.length > 0 && number != '') {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
      } else {
        return false;
      }
      inputEl.current.focus(); //##inputEl(ref)사용하여 Element 찾기!
    },
    [number, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);
  // const avg = useMemo(()=>getAverage(list),[지켜볼대상]);
  // # 특정값이 바뀌었을때만 연산을 실행하게한다! 최적화 hook

  return (
    <div>
      <input type="number" onChange={onChange} value={number} ref={inputEl} /> {/* element에 ref={ref이름} */}
      <button onClick={onInsert}>등록</button>
      <ul style={{ maxHeight: '50vh', padding: '1em', border: '1px solid #ddd', overflow: 'auto' }}>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>평균값 = {avg}</div>??
    </div>
  );
};

export default Average;
