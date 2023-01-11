import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { useTodoDispatch } from '../TodoContext';

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
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  return (
    <TodoItemBlock className='todoList__item' done={done}>
      <div className='checkCircle' onClick={onToggle}>
        {done && <MdDone />}
      </div>

      <div className='text'>{text}</div>
      <div className='remove' onClick={onRemove}>
        <MdDelete />
      </div>
    </TodoItemBlock>
  );
}

// TODO: 2023-01-11 22:19 banghg: create 기능 추가하기.. https://react.vlpt.us/mashup-todolist/03-implement.html

// export default TodoItem;
//성능최적화! usememo
export default React.memo(TodoItem);
