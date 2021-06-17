import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useAuth } from 'provider/AuthProvider';
import axios from 'axios';
import './global.css';
import SignIn from 'screens/SignIn';
import SignUp from 'screens/SignUp';
import HomeScreen from 'screens/HomeScreen';
import FileInput from 'screens/FileInput';
import Upload from 'screens/Upload';

const base_url = 'http://localhost:5000';

const App = () => {
  axios.interceptors.request.use(
    (config) => {
      const { origin } = new URL(config.url);
      const allowedOrigins = [base_url];
      const token = localStorage.getItem('accessToken');
      if (allowedOrigins.includes(origin)) {
        config.headers.authorization = `Bearer ${token}`;
      }
      console.log(config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      console.log(error);
      const originalRequest = error.config;
      let refreshToken = localStorage.getItem('refreshToken');
      if (
        refreshToken &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        return axios
          .post(
            `${base_url}/auth/refresh`,
            {
              refreshToken: refreshToken,
            },
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              localStorage.setItem('accessToken', res.access_token);
              return axios(originalRequest);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      return Promise.reject(error);
    }
  );

  return (
    <Router>
      <div className="font-medium">
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          {/* <PrivateRoute path="/upload">
            <Upload />
          </PrivateRoute> */}
          <Route path="/submit_video">
            <FileInput />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/upload">
            <Upload />
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
        auth.isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
