import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const CardForm = props => {
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', newCard: {title: title}});
        setTitle('');
    }
    
   const dispatch = useDispatch();

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add column</Button>
        </form>
    )
}

export default CardForm;