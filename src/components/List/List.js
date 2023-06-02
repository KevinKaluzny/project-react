import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
    const columns = [
        { id: 1, title: 'Books', icon: 'book' },
        { id: 2, title: 'Movies', icon: 'film' },
        { id: 3, title: 'Games', icon: 'gamepad' },
    ]

    return (
        <div className={styles.list}>
            <header className={styles.header}>Things to do <span>soon!</span></header>
            <p className={styles.description}>Interesting things I want to check out!</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)}
            </section>
        </div>
    );
};

export default List;