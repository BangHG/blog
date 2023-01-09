// #8 Hooks
// #8.2 useEffect
import { useState, useEffect } from 'react';

const Info = () => {
  const [form, setForm] = useState({
    name: '',
    message: '',
  });

  const { name, message } = form;

  // #렌더링이 될 때마다 작업수행하기
  useEffect(() => {
    console.log(`렌더링되었습니다ヾ(•ω•')o`);
  });

  // #마운트될 때만 작업수행하기
  useEffect(() => {
    console.log(`마운트되었습니다(｡･∀･)ﾉﾞ`);
  }, []);

  // #특정값이 업데이트 되었을때만 작업수행하기
  useEffect(() => {
    console.log(`{name}이 업데이트 되었습니다☆⌒(*＾-゜)v`);
  }, [name]);

  // #뒷정리함수 : 업데이트 되기 직전, 언마운트 시점에 작업하기.
  useEffect(() => {
    return () => {
      console.log('뒷정리! o(￣▽￣)ｄ');
    };
    //}, [name]); // 이렇게 하면 업데이트 직전 일때도 작업을 수행한다!
  }, []); // 언마운트 할때만 수행하고 싶다면 두번째 파라미터 비워두기.

  const onChange = (e) => {
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
