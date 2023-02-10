import { useReducer, useCallback, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList11.8';

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);

    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);

    case 'TOGGLE':
      return todos.map((todo) => (todo.id === action.id ? { ...todo, checked: !todo.checked } : todo));

    default:
      return todos;
  }
}

let listLength = 2000;
function createBulk() {
  const arr = [];
  for (let i = 1; i <= listLength; i++) {
    arr.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return arr;
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulk);

  const nextId = useRef(listLength + 1);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        check: false,
      };
      // setTodos(todos => todos.concat(todo)); //#11.5.1 함수형 업데이트
      dispatch({ type: 'INSERT', todo }); // #11.5.2 useReducer
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  });

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
    </TodoTemplate>
  );
};

export default App;
