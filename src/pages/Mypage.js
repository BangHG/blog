import { Navigate } from 'react-router';

const Mypage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    // #13.6.3 Navigate 컴포넌트. 리다이렉트!
    return <Navigate to="/Login" replace={true} />;
  }
  return <div>마이페이지입니다.</div>;
};

export default Mypage;
