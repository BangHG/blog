// 2023-01-11 16:25
// 예제 : https://react.vlpt.us/mashup-todolist/01-create-components.html
// ICON: https://react-icons.github.io/react-icons/icons?name=md

import React from 'react';
import './TodoListWeb.scss';
import TodoTemplate from './componentsWeb/TodoTemplate';
import TodoHead from './componentsWeb/TodoHead';
import TodoList from './componentsWeb/TodoList';
import TodoCreate from './componentsWeb/TodoCreate';
import { TodoProvider } from './TodoContext';

function ToDoList() {
  return (
    <div className="todoList__body">
      <TodoProvider>
        <TodoTemplate>
          <TodoHead> </TodoHead>
          <TodoList> </TodoList>
          <TodoCreate> </TodoCreate>
        </TodoTemplate>
      </TodoProvider>
    </div>
  );
}

export default ToDoList;
