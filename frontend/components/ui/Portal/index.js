import React, { useState, useContext, useEffect } from 'react';
import { useId } from 'helpers';

const PortalContext = React.createContext({});

function Provider({ children }) {
  const [data, setData] = useState({});

  return (
    <PortalContext.Provider value={[data, setData]}>
      {children}
      <Listener />
    </PortalContext.Provider>
  );
}

// getter for children from context
function Listener() {
  const manager = state=> {
    const [data] = state;
    return Object.keys(data).map(key=> {
      return data[key];
    });
  };

  return (
    <PortalContext.Consumer>
      {manager}
    </PortalContext.Consumer>
  );
}

// setter for children to context
function Portal({ children = {} }) {
  const id = useId();
  const [, setData] = useContext(PortalContext);

  useEffect(()=> {
    setData(state=> {
      return { ...state, [id]: children };
    });
  }, [children]);

  return null;
}

Portal.Provider = Provider;
export default Portal;
