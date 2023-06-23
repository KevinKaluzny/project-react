import styles from './Card.module.scss';
import './Card.scss';
import { toggleCardFavorite, getCardById, removeCard } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { clsx } from 'clsx';

const Card = props => {
    const dispatch = useDispatch();
    const card = useSelector(state => getCardById(state, props.id));

    const favoriteCard = () => {
        dispatch(toggleCardFavorite(props.id));
    }

    const deleteCard = () => {
        dispatch(removeCard(props.id));
    }

    return (
        <li className={styles.card} key={props.id}>
            {props.children}
            <button onClick={favoriteCard} className={styles.star}>
                <i className={clsx(card.isFavorite && styles.favorite, 'fa fa-star')} aria-hidden="true"></i>
            </button>
            <button onClick={deleteCard}>
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </li>
    );
}

export default Card;