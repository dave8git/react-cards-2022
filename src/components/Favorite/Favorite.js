import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/store';
import  Card  from '../Card/Card';
const Favorite = props => {

    const cards = useSelector(getFavoriteCard);
    console.log('cards', cards);
    return (
        <div className={styles.background}>
            <PageTitle>Favorite</PageTitle>
            <ul className={styles.cards}>
                {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />)}
            </ul>
        </div>
    );
};

export default Favorite;