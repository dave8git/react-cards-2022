import Home from './components/Home/Home';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import Notfound404 from './components/404Notfound/404NotFound';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Notfound404 />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App; 