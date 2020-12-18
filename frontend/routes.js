import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import * as components from 'ui';
import s from './index.scss';

const Routers = ()=> {
  return (
    <main>
      <Sidebar />
      <div className={s.root}>
        <Switch>
          {
            Object.keys(components).map(key=> {
              if (!components[key].guide) return null;
              return <Route
                exact
                key={key}
                path={`/${key}`}
                component={components[key].guide}
              />;
            })
          }
        </Switch>
      </div>
    </main>
  );
};

export default Routers;
