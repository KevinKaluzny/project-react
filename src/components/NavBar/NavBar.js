import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <a className={styles.a} href='/'><i className={styles.i + " fa-solid fa-bars"}></i></a>
                    </div>
                    <div className={styles.col}>
                        <ul className={styles.ul}>
                            <li><a className={styles.a} href='/'>Home</a></li>
                            <li><a className={styles.a} href='/favorite'>Favorite</a></li>
                            <li><a className={styles.a} href='/about'>About</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;