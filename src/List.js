import { Link } from 'react-router-dom';

const List = () => {
  return (
    <div className="layoutList">
      <h3>React 교재</h3>
      <ul style={{ display: 'grid', listStyle: 'disc', padding: '1em', rowGap: '0.5em' }}>
        <li>
          <Link to={'/IterationSample2'}>
            <b>useState, map:</b> 이벤트 핸들링 예제
          </Link>
        </li>

        <li>
          <Link to={'/Info5'}>
            <b>useEffect, useState, useReducer:</b> 인풋관리
          </Link>
        </li>
        <li>
          <Link to={'/Counter'}>
            <b>useReducer:</b> 카운터 구현하기
          </Link>
        </li>
        <li>
          <Link to={'/Average3'}>
            <b>useMemo, useCallback, useRef:</b> 평균구하기
          </Link>
        </li>
        <li>
          <Link to={'/CSSModule'}>
            <b>CSS:</b> CSS Module
          </Link>
        </li>
        <li>
          <Link to={'/CSSinJS'}>
            <b>CSS:</b> styled-components
          </Link>
        </li>
        <li>
          <Link to={'/TodoList'}>
            <b>App:</b> TodoList.js
          </Link>
        </li>
        <li>
          <Link to={'/TodoList2'}>
            <b>App:</b> TodoList.js : 최적화
          </Link>
        </li>
      </ul>
      <hr style={{ margin: '20px auto' }} />
      <h3>기타</h3>
      <ul style={{ display: 'grid', listStyle: 'disc', padding: '1em', rowGap: '0.5em' }}>
        <li>
          <Link to={'/blog'}>
            <b> :</b> 블로그 Blog (코딩애플)
          </Link>
        </li>
        <li>
          <Link to={'/IterationSample'}>
            <b> :</b> 반복 IterationSample
          </Link>
        </li>
        <li>
          <Link to={'/ReduxApple'}>
            <b> :</b> redux AppleCoding 강좌
          </Link>
        </li>
        <li>
          <Link to={'/TodoListWeb'}>
            <b> :</b> TodoList.js : 패캠버전
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default List;
