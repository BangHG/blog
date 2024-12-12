import ColorBox from './ColorBox';
import { ColorProvider } from './color';
import SelectColors from './SelectColors';
// 괄호로 가져와야한다,..,

const App = () => {
  //Somthing
  return (
    <ColorProvider>
      <div>
        <SelectColors></SelectColors>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};
export default App;
