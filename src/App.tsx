import ColorBox from './components/ColorBox';
import {ColorProvider} from './contexts/color';
import SetColors from './components/setColors';

function App() {
  return (
    <ColorProvider>
        <div>
          <SetColors />
          <ColorBox />
        </div>
    </ColorProvider>
  )
}

export default App;
