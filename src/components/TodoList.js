import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default React.memo(TodoList); //#11.7 TodoList 컴포넌트 최적화하기

