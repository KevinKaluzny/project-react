import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <Link className={styles.a} to='/'><i className={styles.i + " fa-solid fa-bars"}></i></Link>
                    </div>
                    <div className={styles.col}>
                        <ul className={styles.ul}>
                            <li><Link className={styles.a} to='/'>Home</Link></li>
                            <li><Link className={styles.a} to='/favorite'>Favorite</Link></li>
                            <li><Link className={styles.a} to='/about'>About</Link></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;