import styles from './List.module.scss';

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>Things to do <span>soon!</span></header>
            <p className={styles.description}>Interesting things I want to check out!</p>
            <section className={styles.columns}>
                <article>
                    <h2 className={styles.title}>Books</h2>
                </article>
                <article>
                    <h2 className={styles.title}>Movies</h2>
                </article>
                <article>
                    <h2 className={styles.title}>Games</h2>
                </article>
            </section>
        </div>
    );
  };

  export default List;