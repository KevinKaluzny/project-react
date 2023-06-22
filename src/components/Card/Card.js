import styles from './Card.module.scss';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getCardById } from '../../redux/store';
import { clsx } from 'clsx';

const Card = props => {
    const dispatch = useDispatch();
    const card = useSelector(state => getCardById(state, props.id));

    const handleClick = () => {
        dispatch(toggleCardFavorite(props.id));
    }

    return (
        <li className={styles.card} key={props.id}>
            {props.children}
            <button onClick={handleClick} className={styles.star}>
                <i className={clsx(card.isFavorite && styles.favorite, 'fa fa-star')} aria-hidden="true"></i>
            </button>
        </li>
    );
}

export default Card;