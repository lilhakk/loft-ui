import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Portal } from '@loft-ui/react';
import * as components from '@loft-ui/react';
import s from '../index.scss';

// RouteMiddleware
const Routers = ()=> {
  return (
    <main>
      <Portal.Provider>
        <Sidebar />
        <div className={s.root}>
          <Switch>
            {
              Object.keys(components).map(key=> {
                if (!components[key].guide) return null;
                return <Route
                  exact
                  key={key}
                  path={`/react/${key}`}
                  component={components[key].guide}
                />;
              })
            }
          </Switch>
        </div>
      </Portal.Provider>
    </main>
  );
};

export default Routers;
