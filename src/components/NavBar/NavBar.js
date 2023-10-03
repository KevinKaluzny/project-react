import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import clsx from 'clsx';

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
                            <li><NavLink className={({ isActive }) => clsx(isActive ? styles.linkActive : undefined, styles.a)} to='/'>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => clsx(isActive ? styles.linkActive : undefined, styles.a)} to='/favorite'>Favorite</NavLink></li>
                            <li><NavLink className={({ isActive }) => clsx(isActive ? styles.linkActive : undefined, styles.a)} to='/about'>About</NavLink></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default Navbar;