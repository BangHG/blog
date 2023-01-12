// 2023-01-11 16:25
// 예제 : https://react.vlpt.us/mashup-todolist/01-create-components.html
// ICON: https://react-icons.github.io/react-icons/icons?name=md

import React from 'react';
import './TodoList.scss';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

function ToDoList() {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoHead> </TodoHead>
        <TodoList> </TodoList>
        <TodoCreate> </TodoCreate>
      </TodoTemplate>
    </TodoProvider>
  );
}

export default ToDoList;
