import React from 'react';
import dva from 'dva';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Model from './models/index';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(Model);

// 4. Router
app.router(({ history }) => {

  const routes = [
    {path: '/', component: IndexPage }

  ];
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
    </Router>
  );
});

// 5. Start
app.start('#root');
