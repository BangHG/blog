import { useState, useCallback, useEffect, Fragment } from 'react';
import NewsList from './component/NewsList';
import Categories from './component/Categories';
import Title from '../Title.js';

const App = () => {
  const [category, setCategory] = useState('all');
  // const onSelect = useCallback((category) => { setCategory(category); }, []);
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};
export default App;
