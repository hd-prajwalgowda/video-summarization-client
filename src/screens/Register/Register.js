import React from 'react';
import axios from 'axios';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { useAuth } from 'provider/AuthProvider';
import { useHistory } from 'react-router-dom';



const Register = () => {

  let auth = useAuth();
  const history = useHistory();

  const signupHandler = (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      name: e.target.name.value,
      password: e.target.password.value,
    };
    axios
      .post('http://localhost:5000/auth/signup', formData)
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
      <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Sign up
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Sign Up to access your account
              </p>
            </div>
            <div className="m-7">
              <form
                onSubmit={(e) => {
                  signupHandler(e)
                }}
              >
                <div className="mb-6">
                  <label
                    htmlFor="userName"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    required
                    placeholder="John Doe"
                    className="w-full px-3 py-2 placeholder-gray-300 border rounded focus:outline-none focus:ring text-lg"
                  />
                </div>
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
                    required
                    placeholder="example@domain.com"
                    className="w-full px-3 py-2 placeholder-gray-300 border rounded focus:outline-none focus:ring text-lg"
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
                    required
                    placeholder="**********"
                    className="w-full px-3 py-2 placeholder-gray-300 border rounded focus:outline-none focus:ring text-lg"
                  />
                </div>
                <div className="mb-6">
                  <Button
                    title="Register"
                    className="w-full justify-center py-2"
                    type="submit"
                  />
                </div>
                <p className="text-sm text-center text-gray-400">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-blue-500 focus:outline-none focus:underline focus:text-blue-600"
                  >
                    Sign in
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
