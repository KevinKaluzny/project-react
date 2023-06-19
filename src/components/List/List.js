import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsById, getListById } from '../../redux/store';
import { useParams } from 'react-router';

const List = () => {
    const { listId } = useParams();
    const columns = useSelector(state => getColumnsById(state, listId));
    const listData = useSelector(state => getListById(state, listId));

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