import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import { addList } from '../../redux/listsRedux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const ListForm = props => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(title !== '' && description !== '') {
            dispatch(addList({id: shortid(), title: title, description: description})); // wywołanie akcji
            setTitle('');
            setDescription('');
        } else {
            alert('Proszę uzupełnić wszystkie pola!');
        }
    }
    
    const dispatch = useDispatch();

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Description: <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add column</Button>
        </form>
    )
}

export default ListForm;