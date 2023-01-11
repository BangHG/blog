import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import styled, { css } from 'styled-components';

const TodoItemBlock = styled.div`
  ${(props) =>
    props.done &&
    css`
      .text {
        color: #9e9e9e;
      }
      .checkCircle {
        color: #38d9a9;
        border-color: #38d9a9;
      }
    `}
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock className="todoList__item" done={done}>
      <div className="checkCircle">{done && <MdDone />}</div>

      <div className="text">{text}</div>
      <div className="remove">
        <MdDelete />
      </div>
    </TodoItemBlock>
  );
}

export default TodoItem;
