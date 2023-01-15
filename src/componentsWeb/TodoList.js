import React from 'react';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

function TodoList() {
  const todos = useTodoState();

  return (
    <div className="todoList__list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done}></TodoItem>
      ))}

      {/* <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} /> */}
    </div>
  );
}

export default TodoList;
