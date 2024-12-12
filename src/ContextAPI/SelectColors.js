import { ColorConsumer } from './color';
const colors = ['red', ' orange', ' yellow', ' green', 'blue', ' indigo', ' violet'];
const SelectColors = () => {
  //Somthing
  return (
    <div>
      <h2>Choose the color!</h2>

      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex', marginBottom: '1em' }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{ backgroundColor: color, width: 'calc((100vw - 40px) / 7)', aspectRatio: 1, cursor: 'pointer' }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              >
                <p style={{ color: 'white', mixBlendMode: 'difference', padding: '0.5em' }}>{color}</p>
              </div>
            ))}
          </div>
        )}
      </ColorConsumer>
    </div>
  );
};
export default SelectColors;
