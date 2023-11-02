import { Provider } from 'react-redux';
import store from './slices/index'
import './App.css';
import Main from './pages/main';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
