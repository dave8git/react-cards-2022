import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';


const NavBar = props => {


    return (
       <nav className={styles.mainNavStyle}>
        <Container>
            <div className={styles.mainWrapper}>
            <div>
                <a href="/" className={styles.iconBlock}>
                    <i class="fa fa-tasks fa-3x" aria-hidden="true" className={styles.iconTasks}></i>
                </a>
            </div>
            <div>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/favorite">Favorite</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined } to="/about">About</NavLink></li>
                </ul>
            </div>
            </div>

        </Container>
       </nav>
    )
}

export default NavBar;
