import React from 'react';
import axios from 'axios';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import FlexContainer from '../../components/FlexContainer';
import { useAuth } from 'provider/AuthProvider';
import { useHistory } from 'react-router-dom';


const Login = () => {

  let auth = useAuth();
  const history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    axios
      .post('http://localhost:5000/auth/login', formData)
      .then(function (response) {
        // console.log(response);
        const { data:{token} }= response
        auth.login({name:"Prajwal",email:"prajwal@gmail.com"},token)
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Layout>
      <FlexContainer>
        <div className="flex items-center bg-white dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="max-w-md mx-auto my-10">
              <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                  Sign in
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Sign in to access your account
                </p>
              </div>
              <div className="m-7">
                <form onSubmit={(e) => loginHandler(e)}>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@domain.com"
                      className="w-full px-3 py-2 placeholder-gray-300 border rounded focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="**********"
                      className="w-full px-3 py-2 placeholder-gray-300 border rounded focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="mb-6">
                    <Button
                      title="Login"
                      className="w-full justify-center py-2"
                      type="submit"
                    />
                  </div>
                  <p className="text-sm text-center text-gray-400">
                    Don&#x27;t have an account yet?
                    <Link
                      to="/register"
                      className="text-blue-500 focus:outline-none focus:underline focus:text-blue-600"
                    >
                      Sign up
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </FlexContainer>
    </Layout>
  );
};

export default Login;
