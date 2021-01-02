import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as components from '@loft-ui/react';
import Sidebar from './Sidebar';

// RouteMiddleware
const Routers = ()=> {
  return (
    <main>
      <Sidebar />
      <div className="root">
        <Switch>
          {
            Object.keys(components).map(key=> {
              if (!components[key].Guide) return null;
              return <Route
                exact
                key={key}
                path={`/react/${key}`}
                component={components[key].Guide}
              />;
            })
          }
        </Switch>
      </div>
    </main>
  );
};

export default Routers;
