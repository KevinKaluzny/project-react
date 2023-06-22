import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getAllFavoriteCards } from '../../redux/store';

const Favorite = () => {
  const cards = useSelector(state => getAllFavoriteCards(state));
  cards.map(card => console.log(card.title));

    return (
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>

        <article className={styles.column}>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} id={card.id}>{card.title}</Card>)}
            </ul>
        </article>
      </div>
    );
  };
  
  export default Favorite;