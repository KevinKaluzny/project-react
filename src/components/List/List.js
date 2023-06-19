import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsById, getListById } from '../../redux/store';

const List = () => {
    const columns = useSelector(state => getColumnsById(state, 1));
    const listData = useSelector(state => getListById(state, 1));

    return (
        <div className={styles.list}>
            <header className={styles.header}>{listData.title}</header>
            <p className={styles.description}>{listData.description}</p>
            <section className={styles.columns}>
                {columns.map(column => column.listId == 1 &&
                    <Column
                        key={column.id}
                        {...column} />)}
            </section>
            <ColumnForm />
        </div>
    );
};

export default List;