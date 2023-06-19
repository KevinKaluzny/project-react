import List from '../List/List';
import Hero from '../Hero/Hero';
import SearchForm from '../SearchForm/SearchForm';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <List />
    </div>
  );
};

export default Home;