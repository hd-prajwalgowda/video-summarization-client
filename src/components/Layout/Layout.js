import React from 'react';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="fixed z-50 w-full h-12">
        <Navbar />
      </div>
      {children}
      <div className="">Footer</div>
    </div>
  );
};

export default Layout;
