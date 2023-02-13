# [『리액트를 다루는 방법』](https://github.com/velopert/learning-react) 따라가기

<!--  2023-01-06 20:29 banghg  -->

## 목차
### ====1권====

#### 1장 리액트 시작
- #1.1 왜 리액트인가?
  - #1.1.1 리액트 이해
- #1.2 리액트의 특징
  - #1.2.1 Virtual DOM
  - #1.2.2 기타 특징
- #1.3 작업 환경 설정
  - #1.3.1 Node.js와 npm
  - #1.3.2 yarn
  - #1.3.3 에디터 설치
  - #1.3.4 Git 설치
  - #1.3.5 create-react-app으로 프로젝트 생성하기

---

#### 2장 JSX
- #2.1 코드 이해하기
- #2.2 JSX란?
- #2.3 JSX의 장점
  - #2.3.1 보기 쉽고 익숙하다
  - #2.3.2 더욱 높은 활용도
- #2.4 JSX 문법
  - #2.4.1 감싸인 요소
  - #2.4.2 자바스크립트 표현
  - #2.4.3 If 문 대신 조건부 연산자
  - #2.4.4 AND 연산자(&amp;&amp;)를 사용한 조건부 렌더링
  - #2.4.5 undefined를 렌더링하지 않기
  - #2.4.6 인라인 스타일링
  - #2.4.7 class 대신 className
  - #2.4.8 꼭 닫아야 하는 태그
  - #2.4.9 주석
- #2.5 ESLint와 Prettier 적용하기
  - #2.5.1 ESLint
  - #2.5.2 Prettier
- #2.6 정리

---

#### 3장 컴포넌트
- #3.1 클래스형 컴포넌트
- #3.2 첫 컴포넌트 생성
  - #3.2.1 src 디렉터리에 MyComponent.js 파일 생성
  - #3.2.2 코드 작성하기
  - #3.2.3 모듈 내보내기 및 불러오기
- #3.3 props
  - #3.3.1 JSX 내부에서 props 렌더링
  - #3.3.2 컴포넌트를 사용할 때 props 값 지정하기
  - #3.3.3 props 기본값 설정: defaultProps
  - #3.3.4 태그 사이의 내용을 보여 주는 children
  - #3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출하기
  - #3.3.6 propTypes를 통한 props 검증
  - #3.3.7 클래스형 컴포넌트에서 props 사용하기
- #3.4 state
  - #3.4.1 클래스형 컴포넌트의 state
  - #3.4.2 함수형 컴포넌트에서 useState 사용하기
- #3.5 state를 사용할 때 주의 사항
- #3.6 정리

---

#### 4장 이벤트 핸들링
- #4.2 예제 [EventPractice.js](src\EventPractice.js)
  - #4.2.1 컴포넌트 생성 및 불러오기
  - #4.2.2 onChange 이벤트
  - #4.2.3 임의 메서드 만들기 : 클래스형 컴포넌트라 패스
  - #4.2.4 input 여러개 다루기
  - #4.2.5 onKeyPress

---

#### 5장 ref:DOM에 이름달기
- 클래스형 컴포넌트라 패스. 함수형은 useRef 라는 Hook 씁니다.

---

#### 6장 컴포넌트 반복
- #6.2 데이터 배열을 컴포넌트 배열로 변환하기
- #6.3 key [IterationSample.js](src\IterationSample.js)
- #6.4 응용 유동적인 데이터 렌더링
  - #6.4.1 초기상태 설정하기 [IterationSample.6.4.1.js](src\IterationSample.6.4.1.js)
  - #6.4.2 데이터 추가 기능 구현하기 [IterationSample.6.4.2.js](src\IterationSample.6.4.2.js)
  - #6.4.3 데이터 제거 기능 구현하기 [IterationSample.6.4.3.js](src\IterationSample.6.4.3.js)

---

#### 7장 컴포넌트의 라이프사이클 메서드
<!-- - *라이프사이클 메서드는 클래스형 컴포넌트에서만 사용가능하고 함수형에서는 Hook으로 작업합니다.. (시작할때 : useEffect ) * -->
- #7.1 라이프사이클 메서드의 이해
- #7.2 라이프사이클 메서드 살펴보기
  - #7.2.1 render( ) 함수
  - #7.2.2 constructor 메서드
  - #7.2.3 getDerivedStateFromProps 메서드
  - #7.2.4 componentDidMount 메서드
  - #7.2.5 shouldComponentUpdate 메서드
  - #7.2.6 getSnapshotBeforeUpdate 메서드
  - #7.2.7 componentDidUpdate 메서드
  - #7.2.8 componentWillUnmount 메서드
  - #7.2.9 componentDidCatch 메서드
- #7.3 라이프사이클 메서드 사용하기
  - #7.3.1 예제 컴포넌트 생성
  - #7.3.2 App 컴포넌트에서 예제 컴포넌트 사용
  - #7.3.3 에러 잡아내기
- #7.4 정리

---

#### 8장 Hooks
- #8.1 useState [Info.js](src\Info.js)
  - #8.1.1 useState 여러번 쓰기 [Info.js](src\Info.useState.js)
    - #8.1.1 자습 여러개 input 다루기 [Info.js](src\Info.useState.several.js)
- #8.2 useEffect [Info.js](src\Info.useEffect.js)
  - 렌더링이 될 때마다 작업수행하기
  - 마운트될 때만 작업수행하기
  - 특정값이 업데이트 되었을때만 작업수행하기
  - 뒷정리함수 : 업데이트 되기 직전, 언마운트 시점에 작업하기.
- #8.3 useReducer
  - #8.3.1 카운터 구현하기 [Counter.js](src\Counter.useReduce.js)
  - #8.3.2 인풋 상태 관리하기 [Info.js](src\Info.useReduce.8.3.2.js)
- #8.4 useMemo [Average.js](src\Average.js)
- #8.5 useCallback [Average.js](src\Average.callback.js)
- #8.6 useRef 사용하기 [Average.js](src\Average.useRef.js)
- #8.7 커스텀 Hooks 만들기
- #8.8 다른 Hooks
- #8.9 정리

---

#### 9장 컴포넌트 스타일링
- #9.1 가장 흔한 방식, 일반 CSS
  - #9.1.1 이름 짓는 규칙
  - #9.1.2 CSS Selector
- #9.2 Sass 사용하기
  - #9.2.1 utils 함수 분리하기
  - #9.2.2 sass-loader 설정 커스터마이징하기 _:경로설정 간편하게 만들기. 나중에 필요하면 적용해보자.._
  - #9.2.3 node_modules에서 라이브러리 불러오기
- #9.3 CSS Module [CSSModule.js](src\CSSModule.js)
  - #9.3.1 classnames
  - #9.3.2 Sass와 함께 사용하기
  - #9.3.3 CSS Module이 아닌 파일에서 CSS Module 사용하기
- #9.4 styled-components [CSSinJS.js](src\CSSinJS.js)
  - #9.4.1 Tagged 템플릿 리터럴
  - #9.4.2 스타일링된 엘리먼트 만들기
  - #9.4.3 스타일에서 props 조회하기
  - #9.4.4 props에 따른 조건부 스타일링
  - #9.4.5 반응형 디자인
- #9.5 정리

---

#### 10장 일정 관리 웹 애플리케이션 만들기
- [TodoList.js : 패캠버전 ](src\TodoListWeb.js)
- [TodoList.js](src\TodoList.js)
- #10.1 프로젝트 준비하기
  - #10.1.1 프로젝트 생성 및 필요한 라이브러리 설치
  - #10.1.2 Prettier 설정
  - #10.1.3 index.css 수정
  - #10.1.4 App 컴포넌트 초기화
- #10.2 UI 구성하기
  - #10.2.1 TodoTemplate 만들기
  - #10.2.2 TodoInsert 만들기
  - #10.2.3 TodoListItem과 TodoList 만들기
- #10.3 기능 구현하기
  - #10.3.1 App에서 todos 상태 사용하기
  - #10.3.2 항목 추가 기능 구현하기
  - #10.3.3 지우기 기능 구현하기
  - #10.3.4 수정 기능
- #10.4 정리


### ====2권====


#### 11장 컴포넌트 성능 최적화
- #11.1 많은 데이터 렌더링하기
- #11.2 크롬 개발자 도구를 통한 성능 모니터링
- #11.3 느려지는 원인 분석
- #11.4 React.memo를 사용하여 컴포넌트 성능 최적화
- #11.5 onToggle, onRemove 함수가 바뀌지 않게 하기 : [TodoList.11.5.js](src\TodoList.11.5.js)
  - #11.5.1 useState의 함수형 업데이트 :
  ```
  useCallback(() => setNumber(prev => prev + 1),[])
  ```
  - #11.5.2 useReducer 사용하기
- #11.6 불변성의 중요성
- #11.7 TodoList 컴포넌트 최적화하기
- #11.8 react-virtualized를 사용한 렌더링 최적화  : [TodoList.11.8.js](src\components\TodoList11.8.js)
  - #11.8.1 최적화 준비
  - #11.8.2 TodoList 수정
  - #11.8.3 TodoListItem 수정   : [TodoListItem.11.8.js](src\components\TodoListItem.11.8.js)
- #11.9 정리

---
>[immer-tutorial](https://github.com/BangHG/immer-tutorial) 로 프로젝트 분리
#### 12장 immer를 사용하여 더 쉽게 불변성 유지하기
- #12.1 immer를 설치하고 사용법 알아보기
  - #12.1.1 프로젝트 준비
  - #12.1.2 immer를 사용하지 않고 불변성 유지
  - #12.1.3 immer 사용법
  - #12.1.4 App 컴포넌트에 immer 적용하기
  - #12.1.5 useState의 함수형 업데이트와 immer 함께 쓰기
- #12.2 정리

---

#### 13장 리액트 라우터로 SPA 개발하기
- #13.1 SPA란?
  - #13.1.1 SPA의 단점
- #13.2 프로젝트 준비 및 기본적인 사용법
  - #13.2.1 프로젝트 생성 및 라이브러리 설치
  - #13.2.2 프로젝트에 라우터 적용
  - #13.2.3 페이지 만들기
  - #13.2.4 Route 컴포넌트로 특정 주소에 컴포넌트 연결
  - #13.2.5 Link 컴포넌트를 사용하여 다른 주소로 이동하기
- #13.3 Route 하나에 여러 개의 path 설정하기
- #13.4 URL 파라미터와 쿼리
  - #13.4.1 URL 파라미터 : useParams [Article.js](src\pages\Article.js)
  - #13.4.2 URL 쿼리 : useSerchParams [About.js](src\pages\About.js)
- #13.5 서브 라우트
- #13.6 리액트 라우터 부가 기능 
  - #13.6.1 useNavigate : history  [Layout.js](src\Layout.js)
  - #13.6.2 NavLink : 경로 일치 시 스타일 적용 [Articles.js](src\pages\Articles.js)
  - #13.6.3 NotFound 페이지 만들기 [App.js](src\App.js)
  - #13.6.4 Navigate 컴포넌트 : 리다이렉트 [Mypage.js](src\pages\Mypage.js)
- #13.7 정리

---

#### 14장 외부 API를 연동하여 뉴스 뷰어 만들기
- #14.1 비동기 작업의 이해
  - #14.1.1 콜백 함수
  - #14.1.2 Promise
  - #14.1.3 async/await
- #14.2 axios로 API 호출해서 데이터 받아 오기
- #14.3 newsapi API 키 발급받기
- #14.4 뉴스 뷰어 UI 만들기
  - #14.4.1 NewsItem 만들기
  - #14.4.2 NewsList 만들기
- #14.5 데이터 연동하기
- #14.6 카테고리 기능 구현하기
  - #14.6.1 카테고리 선택 UI 만들기 
  - #14.6.2 API를 호출할 때 카테고리 지정하기 [NewsList.js](src\news\component\NewsList.js)
- #14.7 리액트 라우터 적용하기
  - #14.7.1 리액트 라우터의 설치 및 적용
  - #14.7.2 NewsPage 생성
  - #14.7.3 Categories에서 NavLink 사용하기
- #14.8 usePromise 커스텀 Hook 만들기
- #14.9 정리

---

#### 15장 Context API
- #15.1 Context API를 사용한 전역 상태 관리 흐름 이해하기
- #15.2 Context API 사용법 익히기
  - #15.2.1 새 Context 만들기
  - #15.2.2 Consumer 사용하기
  - #15.2.3 Provider
- #15.3 동적 Context 사용하기
  - #15.3.1 Context 파일 수정하기
  - #15.3.2 새로워진 Context를 프로젝트에 반영하기
  - #15.3.3 색상 선택 컴포넌트 만들기
- #15.4 Consumer 대신 Hook 또는 static contextType 사용하기
  - #15.4.1 useContext Hook 사용하기
  - #15.4.2 static contextType 사용하기
- #15.5 정리

---

#### 16장 리덕스 라이브러리 이해하기
- #16.1 개념 미리 정리하기
  - #16.1.1 액션
  - #16.1.2 액션 생성 함수
  - #16.1.3 리듀서
  - #16.1.4 스토어
  - #16.1.5 디스패치
  - #16.1.6 구독
- #16.2 리액트 없이 쓰는 리덕스
  - #16.2.1 Parcel로 프로젝트 만들기
  - #16.2.2 간단한 UI 구성하기
  - #16.2.3 DOM 레퍼런스 만들기
  - #16.2.4 액션 타입과 액션 생성 함수 정의
  - #16.2.5 초깃값 설정
  - #16.2.6 리듀서 함수 정의
  - #16.2.7 스토어 만들기
  - #16.2.8 render 함수 만들기
  - #16.2.9 구독하기
  - #16.2.10 액션 발생시키기
- #16.3 리덕스의 세 가지 규칙
  - #16.3.1 단일 스토어
  - #16.3.2 읽기 전용 상태
  - #16.3.3 리듀서는 순수한 함수
- #16.4 정리

---

#### 17장 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기
- #17.1 작업 환경 설정
- #17.2 UI 준비하기
  - #17.2.1 카운터 컴포넌트 만들기
  - #17.2.2 할 일 목록 컴포넌트 만들기
- #17.3 리덕스 관련 코드 작성하기
  - #17.3.1 counter 모듈 작성하기
  - #17.3.2 todos 모듈 만들기
  - #17.3.3 루트 리듀서 만들기
- #17.4 리액트 애플리케이션에 리덕스 적용하기
  - #17.4.1 스토어 만들기
  - #17.4.2 Provider 컴포넌트를 사용하여 프로젝트에 리덕스 적용하기
  - #17.4.3 Redux DevTools의 설치 및 적용
- #17.5 컨테이너 컴포넌트 만들기
  - #17.5.1 CounterContainer 만들기
  - #17.5.2 TodosContainer 만들기
- #17.6 리덕스 더 편하게 사용하기
  - #17.6.1 redux-actions
  - #17.6.2 immer
- #17.7 Hooks를 사용하여 컨테이너 컴포넌트 만들기
  - #17.7.1 useSelector로 상태 조회하기
  - #17.7.2 useDispatch를 사용하여 액션 디스패치하기
  - #17.7.3 useStore를 사용하여 리덕스 스토어 사용하기
  - #17.7.4 TodosContainer를 Hooks로 전환하기
  - #17.7.5 useActions 유틸 Hook을 만들어서 사용하기
  - #17.7.6 connect 함수와의 주요 차이점
- #17.8 정리

---

#### 18장 리덕스 미들웨어를 통한 비동기 작업 관리
- #18.1 작업 환경 준비
- #18.2 미들웨어란?
  - #18.2.1 미들웨어 만들기
  - #18.2.2 redux-logger 사용하기
- #18.3 비동기 작업을 처리하는 미들웨어 사용
  - #18.3.1 redux-thunk
  - #18.3.2 redux-saga
- #18.4 정리

---

#### 19장 코드 스플리팅
- #19.1 자바스크립트 함수 비동기 로딩
- #19.2 React.lazy와 Suspense를 통한 컴포넌트 코드 스플리팅
  - #19.2.1 state를 사용한 코드 스플리팅
  - #19.2.2 React.lazy와 Suspense 사용하기
  - #19.2.3 Loadable Components를 통한 코드 스플리팅
- #19.3 정리---
#### 20장 서버 사이드 렌더링
- #20.1 서버 사이드 렌더링의 이해
  - #20.1.1 서버 사이드 렌더링의 장점
  - #20.1.2 서버 사이드 렌더링의 단점
  - #20.1.3 서버 사이드 렌더링과 코드 스플리팅 충돌
- #20.2 프로젝트 준비하기
  - #20.2.1 컴포넌트 만들기
  - #20.2.2 페이지 컴포넌트 만들기
- #20.3 서버 사이드 렌더링 구현하기
  - #20.3.1 서버 사이드 렌더링용 엔트리 만들기
  - #20.3.2 서버 사이드 렌더링 전용 웹팩 환경 설정 작성하기
  - #20.3.3 빌드 스크립트 작성하기
  - #20.3.4 서버 코드 작성하기
  - #20.3.5 정적 파일 제공하기
- #20.4 데이터 로딩
  - #20.4.1 redux-thunk 코드 준비하기
  - #20.4.2 Users, UsersContainer 컴포넌트 준비하기
  - #20.4.3 PreloadContext 만들기
  - #20.4.4 서버에서 리덕스 설정 및 PreloadContext 사용하기
  - #20.4.5 스크립트로 스토어 초기 상태 주입하기
  - #20.4.6 redux-saga 코드 준비하기
  - #20.4.7 User, UserContainer 컴포넌트 준비하기
  - #20.4.8 redux-saga를 위한 서버 사이드 렌더링 작업
  - #20.4.9 usePreloader Hook 만들어서 사용하기
- #20.5 서버 사이드 렌더링과 코드 스플리팅
  - #20.5.1 라우트 컴포넌트 스플리팅하기
  - #20.5.2 웹팩과 babel 플러그인 적용
  - #20.5.3 필요한 청크 파일 경로 추출하기
  - #20.5.4 loadableReady와 hydrate
- #20.6 서버 사이드 렌더링의 환경 구축을 위한 대안
  - #20.6.1 Next.js
  - #20.6.2 Razzle
- #20.7 정리

### ====3권====
>[blog-react](https://github.com/BangHG/blog-react) 로 프로젝트 분리
#### 21장 백엔드 프로그래밍: Node.js의 Koa 프레임워크
- #21.1 소개하기
  - #21.1.1 백엔드
  - #21.1.2 Node.js
  - #21.1.3 Koa
- #21.2 작업 환경 준비
  - #21.2.1 Node 설치 확인
  - #21.2.2 프로젝트 생성
  - #21.2.3 ESLint와 Prettier 설정
- #21.3 Koa 기본 사용법
  - #21.3.1 서버 띄우기
  - #21.3.2 미들웨어
- #21.4 nodemon 사용하기
- #21.5 koa-router 사용하기
  - #21.5.1 기본 사용법
  - #21.5.2 라우트 파라미터와 쿼리
  - #21.5.3 REST API
  - #21.5.4 라우트 모듈화
  - #21.5.5 posts 라우트 생성
- #21.6 정리

---

#### 22장 mongoose를 이용한 MongoDB 연동 실습
- #22.1 소개하기
  - #22.1.1 문서란?
  - #22.1.2 MongoDB 구조
  - #22.1.3 스키마 디자인
- #22.2 MongoDB 서버 준비
  - #22.2.1 설치
  - #22.2.2 MongoDB 작동 확인
- #22.3 mongoose의 설치 및 적용
  - #22.3.1 .env 환경변수 파일 생성
  - #22.3.2 mongoose로 서버와 데이터베이스 연결
- #22.4 esm으로 ES 모듈 import/export 문법 사용하기
  - #22.4.1 기존 코드 ES Module 형태로 바꾸기
- #22.5 데이터베이스의 스키마와 모델
  - #22.5.1 스키마 생성
  - #22.5.2 모델 생성
- #22.6 MongoDB Compass의 설치 및 사용
- #22.7 데이터 생성과 조회
  - #22.7.1 데이터 생성
  - #22.7.2 데이터 조회
  - #22.7.3 특정 포스트 조회
- #22.8 데이터 삭제와 수정
  - #22.8.1 데이터 삭제
  - #22.8.2 데이터 수정
- #22.9 요청 검증
  - #22.9.1 ObjectId 검증
  - #22.9.2 Request Body 검증
- #22.10 페이지네이션 구현
  - #22.10.1 가짜 데이터 생성하기
  - #22.10.2 포스트를 역순으로 불러오기
  - #22.10.3 보이는 개수 제한
  - #22.10.4 페이지 기능 구현
  - #22.10.5 마지막 페이지 번호 알려 주기
  - #22.10.6 내용 길이 제한
- #22.11 정리

---

#### 23장 JWT를 통한 회원 인증 시스템 구현하기
- #23.1 JWT의 이해
  - #23.1.1 세션 기반 인증과 토큰 기반 인증의 차이
- #23.2 User 스키마/모델 만들기
  - #23.2.1 모델 메서드 만들기
  - #23.2.2 스태틱 메서드 만들기
- #23.3 회원 인증 API 만들기
  - #23.3.1 회원가입 구현하기
  - #23.3.2 로그인 구현하기
- #23.4 토큰 발급 및 검증하기
  - #23.4.1 비밀키 설정하기
  - #23.4.2 토큰 발급하기
  - #23.4.3 토큰 검증하기
  - #23.4.4 토큰 재발급하기
  - #23.4.5 로그아웃 기능 구현하기
- #23.5 posts API에 회원 인증 시스템 도입하기
  - #23.5.1 스키마 수정하기
  - #23.5.2 posts 컬렉션 비우기
  - #23.5.3 로그인했을 때만 API를 사용할 수 있게 하기
  - #23.5.4 포스트 작성 시 사용자 정보 넣기
  - #23.5.5 포스트 수정 및 삭제 시 권한 확인하기
- #23.6 username/tags로 포스트 필터링하기
- #23.7 정리

---

#### 24장 프런트엔드 프로젝트: 시작 및 회원 인증 구현
- #24.1 작업 환경 준비하기
  - #24.1.1 설정 파일 만들기
  - #24.1.2 라우터 적용
  - #24.1.3 스타일 설정
  - #24.1.4 Button 컴포넌트 만들기
  - #24.1.5 리덕스 적용
- #24.2 회원가입과 로그인 구현
  - #24.2.1 UI 준비하기
  - #24.2.2 리덕스로 폼 상태 관리하기
  - #24.2.3 API 연동하기
  - #24.2.4 회원가입 구현
  - #24.2.5 로그인 구현
  - #24.2.6 회원 인증 에러 처리하기
- #24.3 헤더 컴포넌트 생성 및 로그인 유지
  - #24.3.1 헤더 컴포넌트 만들기
  - #24.3.2 로그인 상태를 보여 주고 유지하기
  - #24.3.3 로그아웃 기능 구현
- #24.4 정리

---

#### 25장 프런트엔드 프로젝트: 글쓰기 기능 구현하기
- #25.1 에디터 UI 구현하기
- #25.2 에디터 하단 컴포넌트 UI 구현하기
  - #25.2.1 TagBox 만들기
- #25.3 리덕스로 글쓰기 상태 관리하기
  - #25.3.1 EditorContainer 만들기
  - #25.3.2 TagBoxContainer 만들기
  - #25.3.3 글쓰기 API 연동하기
- #25.4 정리

---

#### 26장 프런트엔드 프로젝트: 포스트 조회 기능 구현하기
- #26.1 포스트 읽기 페이지 구현하기
  - #26.1.1 PostViewer UI 준비하기
  - #26.1.2 API 연동하기
- #26.2 포스트 목록 페이지 구현하기
  - #26.2.1 PostList UI 준비하기
  - #26.2.2 포스트 목록 조회 API 연동하기
  - #26.2.3 HTML 필터링하기
  - #26.2.4 페이지네이션 구현하기
- #26.3 정리

---

#### 27장 프런트엔드 프로젝트: 수정/삭제 기능 구현 및 마무리
- #27.1 포스트 수정
  - #27.1.1 PostActionButtons 컴포넌트 만들기
  - #27.1.2 수정 버튼 클릭 시 글쓰기 페이지로 이동하기
- #27.2 포스트 삭제
- #27.3 react-helmet-async로 meta 태그 설정하기
- #27.4 프로젝트 마무리
  - #27.4.1 프로젝트 빌드하기
  - #27.4.2 koa-static으로 정적 파일 제공하기
  - #27.4.3 더 할 수 있는 작업
- #27.5 정리

---

#### 28장 그다음은?
- #28.1 리액트 관련 커뮤니티
  - #28.1.1 국내 커뮤니티
  - #28.1.2 국외 커뮤니티
- #28.2 책의 연장선
- #28.3 사이드 프로젝트 생성

---

## 그 외 도움되는 사이트

- [벨로퍼트 패스트캠퍼스](https://react.vlpt.us/basic/20-useReducer.html)
<!-- - [DaleSeo 블로그](https://www.daleseo.com/react-hooks-use-reducer/) : 참고용! -->
