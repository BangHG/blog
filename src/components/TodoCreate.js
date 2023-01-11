import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styled, { css } from 'styled-components';

const CircleButton = styled.button`
  ${(props) =>
    props.open &&
    // /* 여기에 스타일을 작성합니다 (css문법) */
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

  const onToggle = () => setOpen(!open);

  return (
    <div>
      {open && (
        <div className="InsertFormPositioner">
          <form className="InsertForm">
            <input className="Input" autoFocus placeholder="할 일을 입력하고 Enter를 누르세요"></input>
          </form>
        </div>
      )}
      <CircleButton className="CircleButton" onClick={onToggle} open={open}>
        <AiOutlinePlusCircle></AiOutlinePlusCircle>
      </CircleButton>
    </div>
  );
}

export default TodoCreate;
