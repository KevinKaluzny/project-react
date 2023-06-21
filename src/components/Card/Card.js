import styles from './Card.module.scss';
import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Card = props => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleCardFavorite(props.id));
    }

    return (
        <li className={styles.card} key={props.id}>
            {props.children}
            <button onClick={handleClick} className={styles.star}>
                <i className={styles.favorite + ' fa fa-star'} aria-hidden="true"></i>
            </button>
        </li>
    );
}

export default Card;