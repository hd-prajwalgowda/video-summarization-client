import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useAuth } from 'provider/AuthProvider';

import './global.css';
import Login from 'screens/Login';
import Register from 'screens/Register';
import HomeScreen from 'screens/HomeScreen';
import Upload from './screens/Upload';

const App = () => {
  return (
    <Router>
      <div className="font-medium">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
          {/* <PrivateRoute path="/upload">
            <Upload />
          </PrivateRoute> */}
        </Switch>
      </div>
    </Router>
  );
};

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth.isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
