import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../components/common/Navigation';
import Home from '../pages/Home';
import Weekly from '../pages/Weekly';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={'/*'} element={<Home />} />
        <Route path={'/weekly'} element={<Weekly />} />
      </Routes>
    </>
  );
};

export default Layout;
