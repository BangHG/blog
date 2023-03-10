import { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );
  /* 
  const onClick = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
    },
    [onInsert, value]
  ); */

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} placeholder="할 일을 입력하세요!" />
      <button type="submit" /* onClick={onClick} */>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;

