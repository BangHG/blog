import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({
      mode,
      detail: detail === 'true' ? false : true,
    });
  };

  const onInvreaseMode = () => {
    const nextMode = mode == null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>라우터 사용해보기 useSearchParams</p>

      <dl style={{ display: 'flex', margin: '0.5em 0' }}>
        <dt>detail : </dt>
        <dd>{detail}</dd>
      </dl>
      <dl style={{ display: 'flex', margin: '0.5em 0' }}>
        <dt>mode : </dt>
        <dd>{mode}</dd>
      </dl>

      <button onClick={onToggleDetail}>Toggle Detail</button>
      <button onClick={onInvreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;
