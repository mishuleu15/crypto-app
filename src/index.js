import { createRoot } from 'react-dom/client';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import 'antd/dist/antd.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
