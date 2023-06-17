import { List } from 'immutable';
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