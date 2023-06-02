import styles from './List.module.scss';
import Column from '../Column/Column';

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>Things to do <span>soon!</span></header>
            <p className={styles.description}>Interesting things I want to check out!</p>
            <section className={styles.columns}>
                <Column title="Books" />
                <Column title="Movies" />
                <Column title="Games" />
            </section>
        </div>
    );
  };

  export default List;