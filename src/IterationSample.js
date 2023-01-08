// #6 컴포넌트 반복
// #6.2 데이터 배열을 컴포넌트 배열로 변환하기
// #6.3 key

const IterationSample = () => {
  const names = ['핸드폰', '헤어핀', '텀블러', '마우스', '흠', '오..', '바로된당', '너의 키는..'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <div>{nameList}</div>;
};
export default IterationSample;
