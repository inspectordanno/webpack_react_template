import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import AppRouter from './routers/AppRouter';
// import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

///redux
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

const jsx = (
  <h1>
    js mounted
  </h1>
);

ReactDOM.render(jsx, document.getElementById('app'));