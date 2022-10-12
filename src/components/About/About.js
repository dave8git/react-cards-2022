import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = props => {
    return (
        <div className={styles.background}>
            <PageTitle>About</PageTitle>
            <p>Lorem Ipsum</p>
        </div>
    );
};

export default About;