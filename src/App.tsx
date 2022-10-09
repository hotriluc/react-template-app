import React from 'react';
import Navigation from './components/ui/Navigation';
// import { useAppSelector } from './hooks/app-hooks';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <Navigation />
      <AppRoutes />
    </>
  );
}

export default App;
