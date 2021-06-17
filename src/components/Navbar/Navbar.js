/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import { Link } from 'react-router-dom';
import { GoMarkGithub } from 'react-icons/go';
import { Menu } from '@headlessui/react';

import Logo from 'assets/logo.svg';
import { useAuth } from 'provider/AuthProvider';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const auth = useAuth();
  const history = useHistory();

  return (
    <div className="flex items-center justify-between bg-white p-3 flex-wrap h-14">
      <div>
        <Link to="/" className="px-3 py-2 w-auto inline-flex items-center">
          <Logo />
        </Link>
      </div>

      <div className="flex items-center font-medium">
        <Link
          to="/"
          className="inline-block w-auto px-3 py-2 text-gray-900 hover:text-blue-500"
        >
          Home
        </Link>
        <Link
          to="/submit_video"
          className="inline-block w-auto px-3 py-2 text-gray-900 hover:text-blue-500"
        >
          About
        </Link>
        <Link
          to="/guide"
          className="inline-block w-auto px-3 py-2 text-gray-900 hover:text-blue-500"
        >
          Guide
        </Link>
        <Link
          to="/upload"
          className="inline-block w-auto px-3 py-2 text-gray-900 hover:text-blue-500"
        >
          Upload
        </Link>

        {auth.isLoggedIn() ? (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-3 py-2 text-gray-900 hover:text-blue-500 focus:outline-none font-medium">
                {JSON.parse(localStorage.getItem('user')).name}
              </Menu.Button>
            </div>

            <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item className="py-2 px-1 cursor-pointer hover:text-blue-500">
                {({ active }) => (
                  <div
                    className={`${
                      active ? 'text-blue-500' : 'text-gray-900'
                    } px-3 py-1 flex items-center`}
                    onClick={() => {
                      auth.logout();
                      history.push('/signin');
                    }}
                  >
                    Logout
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ) : (
          <>
            <Link
              to="/signin"
              className="inline-block w-auto px-3 py-2 text-gray-900 hover:text-blue-500"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="inline-block w-auto px-3 py-2 text-gray-900 hover:text-blue-500"
            >
              Sign Up
            </Link>
          </>
        )}
        <a
          href="https://github.com/hd-prajwalgowda/video-summarization-core"
          className="inline-block w-auto px-3 py-2 text-gray-900 "
        >
          <GoMarkGithub size="24" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
