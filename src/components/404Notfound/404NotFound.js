import styles from './404Notfound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Notfound404 = props => {
    return (
        <div className={styles.background}>
            <PageTitle>No, na pewno nie tu!</PageTitle>
        </div>
    );
};

export default Notfound404;