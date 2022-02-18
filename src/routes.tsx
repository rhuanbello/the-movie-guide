import React from 'react';

import { 
  Route, 
  Routes 
} from 'react-router-dom';

import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import PersonDetails from './pages/PersonDetails';
import Error404 from './pages/Error404';
import PopularPerson from './pages/PopularPerson';

export default function MainRoutes() {
  const homeOptions = [
    '/', 
    '/page/:page',
    '/now-playing',
    '/top-rated'
  ]

  return (
    <Routes>
      
      {homeOptions.map(page => (
        <Route 
          key={page}
          path={page} 
          element={<Home />} 
        />
      ))}

      <Route path="/person/:id" element={<PersonDetails />} />
      <Route path="/person/popular" element={<PopularPerson />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}


