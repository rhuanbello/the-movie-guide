import React from 'react';

import { 
  Route, 
  Routes 
} from 'react-router-dom';

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Error404 from './pages/Error404';

export default function MainRoutes() {
  return (
    <Routes>
      {['/', '/page/:page'].map(page => (
        <Route 
          key={page}
          path={page} 
          element={<Home />} 
        />
      ))}
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}


