import { useState } from 'react';
const EventPractice = () => {
  const [form, setForm] = useState({
    name: '',
    message: '',
  });

  const { name, message } = form;

  const onChange = (e) => {
    console.log(form);
    const formCopy = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(formCopy);
  };

  function onClick() {
    alert('Who is say that? : ' + name + '\n' + message);
    setForm({
      name: '',
      message: '',
    });
  }

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input name='name' placeholder='이름' value={name} onChange={onChange}></input>
      <input name='message' placeholder='내용' value={message} onChange={onChange} onKeyPress={onKeyPress}></input>
      <br></br>
      <button onClick={onClick}>제출</button>
    </div>
  );
};

export default EventPractice;
