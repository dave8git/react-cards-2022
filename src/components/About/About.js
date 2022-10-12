import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = props => {
    return (
        <div className={styles.background}>
            <PageTitle>About</PageTitle>
        </div>
    );
};

export default About;