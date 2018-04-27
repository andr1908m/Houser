// Set up your application entry point here...
/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import configureStore, { history } from './store/configureStore';
import Root from './components/Root.jsx';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import './favicon.ico'; // Tell webpack to load favicon.ico
// const store = configureStore();

render(
  <AppContainer>
    <Root history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root.jsx', () => {
    const NewRoot = require('./components/Root.jsx').default;
    render(
      <AppContainer>
        <NewRoot history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
