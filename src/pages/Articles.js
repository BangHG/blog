import { Outlet, NavLink } from 'react-router-dom';
import { Fragment } from 'react';

const ArticleItem = ({ id }) => {
  // #13.6.2 NavLink : 경로 일치 시 스타일 적용
  const activeStyle = {
    backgroundColor: '#ff0',
    color: '#000',
    fontWeight: 500,
  };
  return (
    <li style={{ margin: '0.2em 0' }}>
      {/* #13.6.2 NavLink : 경로 일치 시 스타일 적용 */}
      <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to={`/Articles/${id}`}>
        게시글 {id}
      </NavLink>
    </li>
  );
};

const Articles = () => {
  const Tab = ({ tab }) => {
    return (
      <span>
        <br />
        <span style={{ width: `${tab != null ? tab + 'em' : '1em'}`, display: 'inline-block' }} />
      </span>
    );
  };
  return (
    <div>
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={'🎈'} />
        <ArticleItem id={'🎋'} />
        <ArticleItem id={'🎨'} />
      </ul>
      <Outlet />

      <code style={{ display: 'block', margin: '1em 0', background: '#ddd', padding: '1em' }}>
        &lt;ul&gt;
        <Tab /> &lt;li&gt;
        <Tab tab="2" /> &lt;Link to="/Articles/1"&gt;게시글 1/Link&gt;
        <Tab /> &lt;/li&gt;
        <Tab />
        ...<br></br> &lt;/ul&gt;
        <br />
        &lt;Outlet /&gt; : 이 Route가 감싸고 있는 것을 노출 : Article.js
      </code>
    </div>
  );
};

export default Articles;
