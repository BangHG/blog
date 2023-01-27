import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';
// cssModule을 사용하는 이유! : 고유한 이름을 자동으로 생성해주는 옵션

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
        <p style={{ fontSize: '0.5em' }}>
          cssModule : 고유한 클래스명을 자동으로 만들어준다: <em style={{ textDecoration: 'underline', textUnderlineOffset: '0.3em' }}>같은 이름을 써도 절대 안겹친다!</em>
        </p>
      </div>
    </main>
  );
};

export default CSSModule;
