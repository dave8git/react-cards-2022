import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = props => {
    return (
        <div className={styles.background}>
            <PageTitle>Favorite</PageTitle>
            <p>Lorem Ipsum</p>
        </div>
    );
};

export default Favorite;