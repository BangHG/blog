﻿import { ColorConsumer } from './color';

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: state.color,
            }}
          />
          <div
            style={{
              width: '32px',
              height: '32px',
              background: state.subcolor,
            }}
          />
        </>
      )}
      {/* 15.3.2 비구조화 할당 */}
    </ColorConsumer>
  );
};

export default ColorBox;
