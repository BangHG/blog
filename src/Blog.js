// 코딩애플 react강의: 블로그만들기
// https://www.youtube.com/watch?v=uab4P-0Gpzk&list=PLfLgtT94nNq0qTRunX9OEmUzQv4lI4pnP&index=6
import { useState } from 'react';
import './Blog.scss';
function Blog() {
  let post = '돈가스 맛집';
  const [a, aSet] = useState(['돈가스 맛집 리스트', '가라아게 맛집 리스트', '하이볼 맛집 리스트']);
  const [reaction, reactionSet] = useState(0);

  function reactionLike() {
    console.log('좋아요!');
    reactionSet(reaction + 1);
  }
  return (
    <div className="Blog">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <section className="post-list">
        <button
          onClick={() => {
            let aCopy = [...a]; //배열을 복사할땐 Spread syntax(스프레드 연산자)
            aCopy[0] = '여자코트 추천'; // 사본을 수정하고!
            aSet(aCopy); //사본을 state변경해주기
          }}
        >
          날 한번 눌러봐!
        </button>

        <button
          style={{ marginLeft: '5px' }}
          onClick={() => {
            let aSort = [...a];
            aSort.sort();
            aSet(aSort);
            console.log(a);
          }}
        >
          가나다 순으로 정렬하기
        </button>
        <article>
          <h5>{a[0]}</h5>
          <div>
            <button className="reaction-btn" onClick={reactionLike}>
              좋아요👍 <span>{reaction}</span>
            </button>
          </div>
          <p>글내용</p>
        </article>
        <article>
          <h5>{a[1]}</h5>
          <div>
            <button className="reaction-btn">
              좋아요👍 <span>0</span>
            </button>
          </div>
          <p>글내용</p>
        </article>
        <article>
          <h5>{a[2]}</h5>
          <div>
            <button className="reaction-btn">
              좋아요👍 <span>0</span>
            </button>
          </div>
          <p>글내용</p>
        </article>
      </section>
      <Modal title="타이틀입니다1"></Modal>
      <Modal title="타이틀입니다2"></Modal>
      <Modal title="타이틀입니다3"></Modal>
      {/* 중괄호를 넣어서 변수표현을 할 수 있다 */}
    </div>
  );
}

// 컴포넌트 만들기는? : 큰페이지, 반복적인 html 축약 사용.
// 1. function 만들기
// 2. return안에 html담기
// 3. <함수명/> 쓰기
function Modal({ title }) {
  return (
    <div className="modal">
      <h4>{title}</h4>
      <p>2023-01-06 22:25</p>
      <p>
        내용 Lorem ipsum dolor sit amet.
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus tempore voluptates debitis, quasi molestias distinctio eius! Debitis deserunt sint officia autem voluptate ex quam aperiam asperiores officiis impedit magnam sequi praesentium tempora obcaecati, totam ad similique veritatis. Aliquam, cupiditate, aperiam blanditiis tempora, vel dicta ullam asperiores incidunt amet iste quasi.
      </p>
    </div>
  );
}
export default Blog;
