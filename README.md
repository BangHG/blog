# 리액트를 다루는 방법 따라가기

<!--  2023-01-06 20:29 banghg  -->

- **#4 이벤트 핸들링**
  - #4.2 예제 [EventPractice.js](./src/EventPractice.js)
    - #4.2.1 컴포넌트 생성 및 불러오기
    - #4.2.2 onChange 이벤트
    - #4.2.3 임의 메서드 만들기 : 클래스형 컴포넌트라 패스
    - #4.2.4 input 여러개 다루기
    - #4.2.5 onKeyPress

- **#5 ref:DOM에 이름달기**
  - 클래스형 컴포넌트라 패스. 함수형은 useRef 라는 Hook 씁니다.

- **#6 컴포넌트 반복**
  - #6.2 데이터 배열을 컴포넌트 배열로 변환하기 
  - #6.3 key [IterationSample.js](./src/IterationSample.js)
  - #6.4 응용 유동적인 데이터 렌더링 
    - #6.4.1 초기상태 설정하기 : [IterationSample.6.4.1.js](./src/IterationSample.6.4.1.js)
    - #6.4.2 데이터 추가 기능 구현하기 : [IterationSample.6.4.2.js](./src/IterationSample.6.4.2.js)
    - #6.4.3 데이터 제거 기능 구현하기 : [IterationSample.6.4.3.js](./src/IterationSample.6.4.3.js)

- **#7 컴포넌트의 라이프사이클 메서드**
  - 라이프사이클 메서드는 클래스형 컴포넌트에서만 사용가능하고 함수형에서는 Hook으로 작업합니다.. (시작할때 : useEffect ) 그런고로 패스!


- **#8 Hooks**
  - #8.1 useState [Info.js](./src/Info.js)
    - #8.1.1 useState 여러번 쓰기  [Info.js](./src/Info.useState.js)
      - #8.1.1 자습 여러개 input 다루기  [Info.js](./src/Info.useState.several.js)
  - #8.2 useEffect [Info.js](./src/Info.useEffect.js)
    - 렌더링이 될 때마다 작업수행하기
    - 마운트될 때만 작업수행하기
    - 특정값이 업데이트 되었을때만 작업수행하기
    - 뒷정리함수 : 업데이트 되기 직전, 언마운트 시점에 작업하기.
  - #8.3 useReducer
    - #8.3.1 카운터 구현하기 : [Counter.js](./src/Counter.useReduce.js)
    - #8.3.2 인풋 상태 관리하기 : [Info.js](./src/Info.useReduce.8.3.2.js)
  - #8.4 useMemo [Average.js](./src/Average.js)
  - #8.5 useCallback [Average.js](./src/Average.callback.js)
  - #8.6 useRef 사용하기 [Average.js](./src/Average.useRef.js)


-------------------

# 학습도움 모음!
- [벨로퍼트 패스트캠퍼스](https://react.vlpt.us/basic/20-useReducer.html) : 교재랑 거의 비슷함.
- [DaleSeo 블로그](https://www.daleseo.com/react-hooks-use-reducer/) : 참고용!



-------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

