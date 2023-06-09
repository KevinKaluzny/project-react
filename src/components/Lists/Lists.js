import styles from './Lists.module.scss';
import { getAllLists } from '../../redux/store';
import { useSelector } from 'react-redux';
import ListForm from '../ListForm/ListForm';

const Lists = () => {
    const lists = useSelector(state => getAllLists(state));

    return (
        <div className={styles.container}>
            {lists.map(list =>
                <div className={styles.box}>
                    <a href={ '/list/' + list.id }>
                        <h2 className={styles.title}>{list.title}</h2>
                        <p className={styles.description}>{list.description}</p>
                    </a>
                </div>
            )}
            <ListForm />
        </div>
    );
}

export default Lists;