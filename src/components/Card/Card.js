import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { favoriteCard } from '../../redux/store';


const Card = props => {
    const dispatch = useDispatch();

    const handleClickFavorite = id => {
        dispatch(favoriteCard(id));
    }
 
    return (
        <li className={styles.card}>
            <span>{props.title}</span>
            <div>
                <button onClick={() => {handleClickFavorite(props.id, props.isFavorite)}} className={clsx(styles.button, props.isFavorite && styles.favorite)}>
                    <span className='fa fa-star' />
                </button>
            </div>
        </li>
    );
};

export default Card;