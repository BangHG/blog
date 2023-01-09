// #4 이벤트핸들링 (함수형으로 작업하기1)
import { useState } from 'react';
import './App.scss';

const EventPractice = () => {
  // const [name, setName] = useState('');
  // const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    name: '',
    message: '',
  });

  const { name, message } = form;

  // #4.2.2 onChange 이벤트
  const onChange = (e) => {
    console.log(form);
    const nextForm = {
      ...form, // array 복사하기
      //#4.2.4 인풋 여러개 다루기
      [e.target.name]: e.target.value, //key[name attr] : 내용 덮어씌우기
    };
    setForm(nextForm); //setter에 넣어주기
  };

  const onClick = () => {
    alert(name + ': ' + message);
    setForm({
      name: '',
      message: '',
    });
  };

  // ##4.2.5 onKeyPress
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div style={{ padding: '25px' }}>
      <h1>이벤트 연습</h1>
      <p>
        <input type="text" name="name" placeholder="사용자명" value={name} onChange={onChange} />
      </p>
      <p>
        <input type="text" name="message" placeholder="입력해보세요" value={message} onChange={onChange} onKeyPress={onKeyPress} />
      </p>
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPractice;
