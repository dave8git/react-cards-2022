import styles from './Home.module.scss';
import Hero from '../Hero/Hero';
import SearchForm from '../SearchForm/SearchForm';
import Lists from '../Lists/Lists';

const Home = props => {
    return (
        <>
         <Hero />
         <Lists />
        </>
    );
};

export default Home;