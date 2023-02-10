import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './layout.scss';

const Layout = () => {
  return (
    <div className="App">
      <header className="layoutHeader">
        <Link to={'/'}>↩️ 목록으로</Link>
      </header>
      <main className="layoutMain">
        <Outlet></Outlet>
      </main>
      {/* <footer className="layoutFooter">푸터입니다</footer> */}
    </div>
  );
};

export default Layout;
