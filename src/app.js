import './app.css';
import { useAppEvent } from 'remax/macro';
const App = (props) => {
  useAppEvent('onShow', () => {
    console.log('do some initial when launch');
  });

  return props.children;
};

export default App;
