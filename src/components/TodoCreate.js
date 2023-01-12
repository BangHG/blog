import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styled, { css } from 'styled-components';
import { useTodoNextId, useTodoDispatch } from '../TodoContext';

const CircleButton = styled.button`
  /* 여기에 스타일을 작성합니다 (css문법) */
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });

    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <div>
      {open && (
        <div className="InsertFormPositioner">
          <form className="InsertForm" onSubmit={onSubmit}>
            <input className="Input" onChange={onChange} autoFocus placeholder="할 일을 입력하고 Enter를 누르세요"></input>
          </form>
        </div>
      )}
      <CircleButton className="CircleButton" onClick={onToggle} open={open}>
        <AiOutlinePlusCircle></AiOutlinePlusCircle>
      </CircleButton>
    </div>
  );
}

export default React.memo(TodoCreate);
