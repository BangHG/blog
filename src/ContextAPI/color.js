import React, { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

const { Consumer: ColorConsumer } = ColorContext;
/*
const ColorConsumer = ColorContext.Consumer; // 위와 같은 코드임니다..
 */
export { ColorProvider, ColorConsumer };
// 도당체 무슨뜻인지 모르겠음.
export default ColorContext;
