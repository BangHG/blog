import { useState, useCallback, useMemo } from 'react';

const getAverage = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  const total = numbers.reduce((a, b) => a + b);
  console.log(`total :  ${total} / ${numbers.length}`);
  return total / numbers.length;
};
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState();

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      // setNumber('');
    },
    [list, number]
  );

  const onKeyUp = useCallback((e) => {
    if (e.key === 'Enter') {
      onInsert();
    }
  });

  const avg = useMemo(() => getAverage(list), [list]);
  // useMemo(() => first, [second])

  return (
    <div>
      <input type="number" onChange={onChange} value={number} onKeyUp={onKeyUp} />
      <button onClick={onInsert}>등록</button>
      <ul
        style={{
          maxHeight: '50vh',
          border: '3px dashed #ddd',
          overflow: 'auto',
        }}
      >
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>평균값? {avg}</div>
    </div>
  );
};

export default Average;
