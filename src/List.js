import { Link } from 'react-router-dom';

const List = () => {
  return (
    <div className="layoutList">
      <h3>React 교재</h3>
      <ul style={{ display: 'grid', listStyle: 'disc', padding: '1em', rowGap: '0.5em' }}>
        <li>
          <Link to={'/IterationSample2'}>
            <span style={{ minWidth: '2.7em', display: 'inline-block', marginRight: '0.3em' }}>#6</span>
            <b>useState, map:</b> 이벤트 핸들링 예제
          </Link>
        </li>

        <li>
          <Link to={'/Info5'}>
            <span style={{ minWidth: '2.7em', display: 'inline-block', marginRight: '0.3em' }}>#8</span>
            <b>useEffect, useState, useReducer:</b> 인풋관리
          </Link>
        </li>
        <li>
          <Link to={'/Counter'}>
            <span style={{ minWidth: '2.7em', display: 'inline-block', marginRight: '0.3em' }}>#8.3</span>
            <b>useReducer:</b> 카운터 구현하기
          </Link>
        </li>
        <li>
          <Link to={'/Average3'}>
            <span style={{ minWidth: '2.7em', display: 'inline-block', marginRight: '0.3em' }}>#8.4</span>
            <b>useMemo, useCallback, useRef:</b> 평균구하기
          </Link>
        </li>
        <li>
          <Link to={'/CSSModule'}>
            <span style={{ minWidth: '2.7em', display: 'inline-block', marginRight: '0.3em' }}>#9.3 </span>
            <b>CSS:</b> CSS Module
          </Link>
        </li>
        <li>
          <Link to={'/CSSinJS'}>
            <span style={{ minWidth: '2.7em', display: 'inline-block', marginRight: '0.3em' }}>#9.4</span>
            <b>CSS:</b> styled-components
          </Link>
        </li>
        <li>
          <Link to={'/TodoList'}>
            <span style={{ minWidth: '2.7em', display: 'inline-block', marginRight: '0.3em' }}>#10</span>
            <b>App:</b> TodoList.js
          </Link>
        </li>
        <li>
          <Link to={'/TodoList2'}>
            <span style={{ minWidth: '2.7em', display: 'inline-block', marginRight: '0.3em' }}>#11</span>
            <b>App:</b> TodoList.js : 최적화
          </Link>
        </li>
      </ul>
      <hr style={{ minWidth: '2.7em', display: 'inline-block', margin: '20px auto' }} />
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
