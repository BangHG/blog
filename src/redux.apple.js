import { useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

function App() {
  const 변수 = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>숫자는 {변수}</h1>
      <div style={{ display: 'flex' }}>
        <button onClick={() => dispatch({ type: 'PLUS' })}>5 더해</button>
        <button onClick={() => dispatch({ type: 'MINUS' })}>5 빼</button>
      </div>
    </div>
  );
}

export default App;

