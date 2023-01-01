import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store/store';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
