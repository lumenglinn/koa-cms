import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'
import IndexPage from './routes/IndexPage';

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/dashboard',
      models: () => [import('./models/dashboard')],
      component: () => import('./routes/dashboard/'),
    }, {
      path: '/user',
      models: () => [import('./models/user')],
      component: () => import('./routes/user/'),
    }, {
      path: '/login',
      models: () => [import('./models/login')],
      component: () => import('./routes/login/'),
    }, {
      path: '/dataConfig',
      models: () => [import('./models/dataConfig')],
      component: () => import('./routes/dataConfig/'),
    }
  ]
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        {
          routes.map(({ path, ...dynamics }, key) => (
            <Route key={key}
              exact
              path={path}
              component={dynamic({
                app,
                ...dynamics,
              })}
            />
          ))
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
