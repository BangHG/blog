// import classNames from 'classnames/bind';
import styled, { css } from 'styled-components';

// styled-components : CSS-in-JS라 불리는 기법(JS파일에 스타일을 내장시키는 방법. 스타일 작성과 동시에 스타일이 적용된 컴포넌트를 만든다.) 개발자들이 가장 선호하는 라이브러리가  styled-components 이다. emotion 라이브러리도 대표적이다.
//vscode plugin중 vscode-styled-components 을 설치하면 css구문/자동완성이 잘 나온다!

//mixin 처럼 사용하는 법
const mixinWrapperSetting = css`
  padding: 1em;
  margin: 0.5em 0;
  background-color: ${(props) => props.color || '#999'};
  border: 0.4em outset ${(props) => props.color || '#666'};
`;

const Wrapper = styled.div`
  ${mixinWrapperSetting}
  font-family: '나눔스퀘어', 'NanumSquareNeo-Variable';
  font-size: 2rem;
  &:before {
    display: block;
    font-size: 1rem;
    margin-bottom: 1rem;
    content: '내 클래스이름은 ' attr(class);
    // 내용이 바뀔때마다 클래스명이 바뀐다.
  }
  &.grayscaled {
    filter: grayscale(1);
  }
  /* 조건부 스타일링 #9.4.4 */
  ${(props) =>
    props.inverted &&
    css`
      filter: invert(1);
    `}
`;

const Something = styled.p`
  ${mixinWrapperSetting};
  font-size: 1rem;
  &:before {
    display: inline-block;
    /* width: 0; */
    /* height: 0; */
    background-color: #fefefe;
    border: 1em solid white;
    border-top-color: #4285f4;
    border-right-color: #db4437;
    border-bottom-color: #f4b400;
    border-left-color: #0f9d58;
    padding: 0.4em;
    font-weight: bold;
    text-transform: capitalize;
    content: 'look i colored like google';
  }
`;

const CSSinJS = () => {
  return (
    <main>
      <styledSample />
      <styledSample />
      <styledSample>뭥..</styledSample>
      <Wrapper color="#bbfffe">
        Hello.. It's me..
        <Something color="#a3fea3"></Something>
      </Wrapper>
      <Wrapper color="#f999f9" inverted={true}>
        I'm Inverted
        <Something color="#f2f289"></Something>
      </Wrapper>

      <Wrapper color="#ffee5e" className="grayscaled">
        I'm grayscaled
        <Something color="#abffff"></Something>
      </Wrapper>
    </main>
  );
};

export default CSSinJS;
