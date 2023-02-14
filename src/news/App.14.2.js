import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  // async await 적용
  const onClick = async () => {
    try {
      const res = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=5865802cda1345e8a3667d3cc622627d');
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const onClick = () => {
  // axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => {
  // setData(res.data);
  // });
  // }

  useEffect(() => {
    onClick();
  }, []);

  return (
    <div>
      <div style={{ marginBottom: '1em' }}>
        <button onClick={onClick}>불러오기!</button>
      </div>

      {data && <textarea rows={50} value={JSON.stringify(data, null, 2)} readOnly={true}></textarea>}
    </div>
  );
};
export default App;
