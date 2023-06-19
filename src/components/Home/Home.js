import Hero from '../Hero/Hero';
import SearchForm from '../SearchForm/SearchForm';
import Lists from '../Lists/Lists';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <Lists />
    </div>
  );
};

export default Home;