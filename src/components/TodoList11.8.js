import React from 'react';
import { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem.11.8';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  // 11.8. react-vertualized 렌더링최적화
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style} />;
    },
    [onRemove, onToggle, todos]
  );

  return <List className="TodoList" width={453} height={500} rowCount={todos.length} rowHeight={57} rowRenderer={rowRenderer} list={todos} style={{ outline: 'none' }}></List>;
};

export default React.memo(TodoList); //#11.7 TodoList 컴포넌트 최적화하기
