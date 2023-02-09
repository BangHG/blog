import { Fragment } from 'react';
import { createStore } from 'redux';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from './List';
import Blog from './Blog';
import ReduxApple from './redux.apple';

import IterationSample2 from './IterationSample.6.4.3';

import Info5 from './Info.useReduce.8.3.2';
import Counter from './Counter.useReduce';

import Average3 from './Average.useRef';

import CSSModule from './CSSModule';
import CSSinJS from './CSSinJS';

import TodoListWeb from './TodoListWeb';
import TodoList from './TodoList';
import TodoList2 from './TodoList.11.5';

import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<List />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/ReduxApple" element={<ReduxApple />}></Route>

          <Route path="/IterationSample2" element={<IterationSample2></IterationSample2>}></Route>

          <Route path="/Info5" element={<Info5></Info5>}></Route>

          <Route path="/Counter" element={<Counter></Counter>}></Route>

          <Route path="/Average3" element={<Average3></Average3>}></Route>
          <Route path="/CSSModule" element={<CSSModule></CSSModule>}></Route>
          <Route path="/CSSinJS" element={<CSSinJS></CSSinJS>}></Route>
          <Route path="/TodoListWeb" element={<TodoListWeb></TodoListWeb>}></Route>
          <Route path="/TodoList" element={<TodoList></TodoList>}></Route>
          <Route path="/TodoList2" element={<TodoList2></TodoList2>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
