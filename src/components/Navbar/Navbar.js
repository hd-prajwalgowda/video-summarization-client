import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Logo from 'assets/logo.svg';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white-200 p-3 flex-wrap">
      <div>
        <Link to="/" className="px-3 py-1 w-auto inline-flex items-center ">
          <Logo />
        </Link>
      </div>

      <div className="flex items-center">
        <Link
          to="/"
          className="inline-block w-auto px-3 py-2 text-black-300 hover:text-blue-500"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="inline-block w-auto px-3 py-2 text-black-300 hover:text-blue-500"
        >
          About
        </Link>
        <Link
          to="/guide"
          className="inline-block w-auto px-3 py-2 text-black-300 hover:text-blue-500"
        >
          Guide
        </Link>
        <Link
          to="/upload"
          className="inline-block w-auto px-3 py-2 text-black-300 hover:text-blue-500"
        >
          Upload
        </Link>

        <Link
          to="/upload"
          className="inline-block w-auto px-3 py-2 text-black-300 hover:text-blue-500"
        >
          Sign In
        </Link>
        <Link
          to="/upload"
          className="inline-block w-auto px-3 py-2 text-black-300 hover:text-blue-500"
        >
          Sign Up
        </Link>
        <a
          href="https://github.com/hd-prajwalgowda/video-summarization-core"
          className="inline-block w-auto px-3 py-2 text-black-300 "
        >
          <GoMarkGithub size="24" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
