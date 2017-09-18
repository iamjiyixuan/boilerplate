import React from 'react';
import dva from 'dva';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CountModel from './models/count';
import GankModel from './models/gank';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(CountModel);
app.model(GankModel);

// 4. Router
app.router(({ history }) => {

  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
    </Router>
  );
});

// 5. Start
app.start('#root');
