import { 
  Route, 
  Routes 
} from 'react-router-dom';

import Home from '../../pages/Home';
import MovieDetails from '../../pages/MovieDetails';
import PersonDetails from '../../pages/PersonDetails';
import PopularPerson from '../../pages/PopularPerson';
import MyProfile from '../../pages/MyProfile';
import Error404 from '../../pages/Error404';

export default function MainRoutes() {
  const homeOptions = [
    '/', 
    '/page/:page',
    '/now-playing/',
    '/now-playing/page/:page',
    '/top-rated',
    '/top-rated/page/:page',
    '/upcoming/',
    '/upcoming/page/:page'
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
      <Route path="/person/popular/page/:page" element={<PopularPerson />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/profile/my-profile" element={<MyProfile />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}


