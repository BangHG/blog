import React from 'react';
import { useTodoState } from '../TodoContext';

function TodoHead() {
  const todos = useTodoState();
  // 미완수 갯수
  const undoneTasks = todos.filter((todo) => !todo.done);

  //날짜 출력하기
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // year: '2-digit',
    // month: '2-digit',
    // day: '2-digit',
  });
  //요일
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

  return (
    <header className='todoList__head'>
      <h1>{dateString}</h1>
      <p className='day'>{dayName}</p>
      <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
    </header>
  );
}

export default TodoHead;
