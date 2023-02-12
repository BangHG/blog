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

import About from './pages/About';
import Articles from './pages/Articles';
import Article from './pages/Article';

import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Mypage from './pages/Mypage';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<List />}></Route>
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
          <Route path="/About" element={<About></About>}></Route>

          {/* 중첩된 라우트 */}
          <Route path="/Articles" element={<Articles></Articles>}>
            <Route path=":id" element={<Article></Article>} />
          </Route>
          {/* 얼마든지 중첩이 가능하군아 */}
          {/* #13.6.4 Navigate 컴포넌트 */}
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Mypage" element={<Mypage />}></Route>
        </Route>

        {/* #13.6.3 NotFound 페이지 만들기 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
