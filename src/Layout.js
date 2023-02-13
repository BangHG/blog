import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './layout.scss';

const Layout = () => {
  const location = useLocation();
  // console.log(location);
  const [headerContent, setHeaderContent] = useState('목차');

  function checkPath() {
    if (location.pathname == '/') {
      setHeaderContent('목차🎈');
    } else {
      setHeaderContent(
        <div>
          <button onClick={goBack}>↩️ 뒤로가기</button>
          <button onClick={goArticles}>📚 목록으로</button>
        </div>
      );
      // setHeaderContent(<Link to={'/'}>↩️ 목록으로</Link>);
    }
  }

  useEffect(() => {
    checkPath();
  }, [location]);

  //#13.6 리액트 라우터 부가기능
  //#13.6.1 useNavigate
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goArticles = () => {
    navigate('/', { replace: true }); //페이지기록남기지 않음.
  };

  return (
    <div className="App">
      <header className="layoutHeader">{headerContent}</header>
      <main className="layoutMain">
        <Outlet />
      </main>
      {/* <footer className="layoutFooter">푸터입니다</footer> */}
    </div>
  );
};

export default Layout;
