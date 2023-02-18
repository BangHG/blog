import { Link } from 'react-router-dom';
import Title from './Title.js';

const List = () => {
  return (
    <div className="layoutList">
      <Title>React 교재</Title>
      <ul>
        <li>
          <Link to={'/IterationSample2'}>
            <span>#6</span>
            <p>
              <b>useState, map:</b> 이벤트 핸들링 예제 : 반복/추가/삭제
            </p>
          </Link>
        </li>

        <li>
          <Link to={'/Info5'}>
            <span>#8</span>
            <p>
              <b>useEffect, useState, useReducer:</b> 인풋관리
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/Counter'}>
            <span>#8.3</span>
            <p>
              <b>useReducer:</b> 카운터 구현하기
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/Average3'}>
            <span>#8.4</span>
            <p>
              <b>useMemo, useCallback, useRef:</b> 평균구하기
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/CSSModule'}>
            <span>#9.3 </span>
            <p>
              <b>CSS:</b> CSS Module
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/CSSinJS'}>
            <span>#9.4</span>
            <p>
              <b>CSS:</b> styled-components
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/TodoList'}>
            <span>#10</span>
            <p>
              <b>App:</b> TodoList.js
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/TodoList2'}>
            <span>#11</span>
            <p>
              <b>App:</b> TodoList.js : 최적화
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/About'}>
            <span>#13</span>
            <p>
              <b>Route</b> useSearchParam
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/Articles'}>
            <span>#13.5</span>
            <p>
              <b>Route</b> 중첩된 라우트
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/Mypage'}>
            <span>#13.6</span>
            <p>
              <b>Route:Navigate Component</b> 마이페이지 가보기
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/NewsApi'}>
            <span>#14.2</span>
            <p>
              <b>Axios</b> NEWS 데이터 호출하기
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/NewsPage/'}>
            <span>#14.2</span>
            <p>
              <b>App:</b> News Stand
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/ContextAPI/'}>
            <span>#15</span>
            <p>
              <b>ContextAPI</b>
            </p>
          </Link>
        </li>
      </ul>

      {/* 
888    888 8888888b.  
888    888 888   Y88b 
888    888 888    888 
8888888888 888   d88P 
888    888 8888888P"  
888    888 888 T88b   
888    888 888  T88b  
888    888 888   T88b 
*/}

      <hr />
      <Title>기타</Title>
      <ul>
        <li>
          <Link to={'/blog'}>
            <p>
              <b></b> 블로그 Blog (코딩애플)
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/ReduxApple'}>
            <p>
              <b></b> redux AppleCoding 강좌
            </p>
          </Link>
        </li>
        <li>
          <Link to={'/TodoListWeb'}>
            <p>
              <b></b> TodoList.js : 패캠버전
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default List;
