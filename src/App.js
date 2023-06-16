import Hero from './components/Hero/Hero.js';
import SearchForm from './components/SearchForm/SearchForm.js';
import List from './components/List/List.js';
import Container from './components/Container/Container.js';
import Navbar from './components/NavBar/NavBar.js';

const App = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </main>
  );
};

export default App;
