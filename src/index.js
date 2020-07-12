import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Dropdown from './components/Dropdown';

// const store = configureStore();

//redux
// const jsx = (
//   <Provider store={store}>
//     <h1>
//       js mounted
//     </h1>
//   </Provider>
// );

const jsx = (
  <Dropdown />
);

ReactDOM.render(jsx, document.getElementById('app'));