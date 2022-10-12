import styles from './NavBar.module.scss';
import Container from '../Container/Container';


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
                    <li><a href="/">Home</a></li>
                    <li><a href="/favorite">Favorite</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
            </div>

        </Container>
       </nav>
    )
}

export default NavBar;
