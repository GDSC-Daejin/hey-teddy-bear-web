import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/common/Navigation';
import Home from '../pages/Home';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={'/*'} element={<Home />} />
      </Routes>
    </>
  );
};

export default Layout;
