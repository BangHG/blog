import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';

const cm = classNames.bind(styles);
const CSSModule = () => {
  return (
    <main>
      {/* // <div className={`${styles.wrapper} ${styles.grayscaled}`}>
    //   안녕하세요
    //   <p className="something"></p>
    //   <p className={styles.something}></p>
    // </div> */}

      {/* // classNames.bind 사용하면 아래와 같이 styles.[클래스명] 안붙여줘도 된다! */}
      {/* // <div className={cm('wrapper', 'grayscaled')}> */}
      <div className={cm('wrapper')}>
        안녕하세요
        <p className="something"></p>
        <p className={cm('something')}></p>
      </div>
    </main>
  );
};

export default CSSModule;
