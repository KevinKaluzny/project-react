import styles from './Favorite.module.scss';

const Favorite = () => {
    return (
      <div className={styles.favorite}>
        <h1 className={styles.title}>Favorite</h1>
        <p className={styles.subtitle}>Lorem ipsum.</p>
      </div>
    );
  };
  
  export default Favorite;