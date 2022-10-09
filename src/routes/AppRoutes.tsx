import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFoundPage from '../components/pages/404';
import Home from '../components/pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
