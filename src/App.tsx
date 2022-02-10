import { GlobalStyle } from './styles/global';

import { Header } from './components/Header';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes />
        <GlobalStyle />   
      </Router>
    </>
  )
}

