// #8 Hooks
// #8.1 useState INPUT여러개 사용하기(배열) 복습. 할때마다 헷갈려ㅠㅠ
import { useState } from 'react';

const Info = () => {
  // const [name, setName] = useState('현경');
  // const [message, setMessage] = useState('없다');
  const [form, setForm] = useState({
    name: '',
    message: '',
  });

  const { name, message } = form;

  const onChange = (e) => {
    console.log(name, message);
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  return (
    <div>
      <input type="text" name="name" onChange={onChange} />
      <input type="text" name="message" onChange={onChange} />

      <p>
        내 이름은 {name},
        <br />할 말은 {message}.
      </p>
    </div>
  );
};

export default Info;
