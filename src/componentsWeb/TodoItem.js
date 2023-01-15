import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { useTodoDispatch } from '../TodoContext';

const TodoItemBlock = styled.div`
  &:hover .text {
    color: #9e9e9e;
  }
  ${(props) =>
    props.done &&
    css`
      .text {
        color: #9e9e9e;
        text-decoration: line-through;
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
    <TodoItemBlock className="todoList__item" done={done}>
      <div className="checkCircle" onClick={onToggle}>
        {done && <MdDone />}
      </div>

      <div className="text">{text}</div>
      <div className="remove" onClick={onRemove}>
        <MdDelete />
      </div>
    </TodoItemBlock>
  );
}

// export default TodoItem;
//성능최적화! usememo
export default React.memo(TodoItem);
