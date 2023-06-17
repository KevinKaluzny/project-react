import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns, getListById } from '../../redux/store';

const List = () => {
    const columns = useSelector(state => getAllColumns(state));
    const listData = useSelector(state => getListById(state, 1));

    return (
        <div className={styles.list}>
            <header className={styles.header}>{listData.title}</header>
            <p className={styles.description}>{listData.description}</p>
            <section className={styles.columns}>
                {columns.map(column =>
                    <Column
                        key={column.id}
                        {...column} />)}
            </section>
            <ColumnForm />
        </div>
    );
};

export default List;