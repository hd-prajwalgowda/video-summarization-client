import React from 'react';
import FlexContainer from '../FlexContainer';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="fixed z-50 w-full h-12 bg-white">
        <Navbar />
      </div>
      <FlexContainer>{children}</FlexContainer>
      <div className="">Footer</div>
    </div>
  );
};

export default Layout;
