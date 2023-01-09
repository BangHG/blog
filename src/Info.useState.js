// #8 Hooks
// #8.1 useState
import { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('현경');
  const [message, setMessage] = useState('없다');

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <input type="text" name={name} onChange={onChangeName} />
      <input type="text" name={message} onChange={onChangeMessage} />

      <p>
        {' '}
        내 이름은 {name},
        <br />할 말은 {message}.
      </p>
    </div>
  );
};

export default Info;
