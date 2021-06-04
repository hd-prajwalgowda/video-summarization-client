import React from 'react';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <div className="fixed z-50 w-full h-12">
        <Navbar />
      </div>
      <div className="pt-16 h-96 min-w-screen min-h-screen">{children}</div>
      <div className="">Footer</div>
    </div>
  );
};

export default Layout;
