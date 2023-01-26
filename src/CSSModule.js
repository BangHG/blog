import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';

const cn = classNames.bind(styles);

const CSSModule = () => {
  return (
    <main>
      <div className={`${styles.wrapper} ${styles.grayscaled}`}>
        Hello.. It's me..
        <p className="something"></p>
        <p className={styles.something}></p>
      </div>

      {/* #9.3.1 classnames */}
      {/* // classNames.bind 사용하면 아래와 같이 styles.[클래스명] 안붙여줘도 된다! */}
      {/* // <div className={cn('wrapper', 'grayscaled')}> */}
      <div className={cn('wrapper')}>
        안녕하세요
        <p className="something"></p>
        <p className={cn('something')}></p>
      </div>
    </main>
  );
};

export default CSSModule;
