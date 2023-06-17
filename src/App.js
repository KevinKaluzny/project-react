import Container from './components/Container/Container.js';
import Navbar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Favorite from './components/Favorite/Favorite.js';

const App = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <Home />
        <About />
        <Favorite />
      </Container>
    </main>
  );
};

export default App;
