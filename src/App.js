import Container from './components/Container/Container.js';
import Navbar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Favorite from './components/Favorite/Favorite.js';
import ErrorPage from './components/ErrorPage/ErrorPage.js';
import List from './components/List/List.js';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
