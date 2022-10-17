import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { favoriteCard, removeCard } from '../../redux/cardsRedux';


const Card = props => {
    const dispatch = useDispatch();

    const handleClickFavorite = id => {
        dispatch(favoriteCard(id));
    }

    const handleRemoveCard = id => {
        dispatch(removeCard(id));
    }
 
    return (
        <li className={styles.card}>
            <span>{props.title}</span>
            <div>
                <button onClick={() => {handleClickFavorite(props.id, props.isFavorite)}} className={clsx(styles.button, props.isFavorite && styles.favorite)}>
                    <span className='fa fa-star' />
                </button>
                <button type="button" onClick={() => {handleRemoveCard(props.id);}} className={styles.button}>
                    <span className='fa fa-trash' />
                </button>
            </div>
        </li>
    );
};

export default Card;