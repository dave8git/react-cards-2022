import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import { addColumn } from '../../redux/columnsRedux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(title !== '' && icon !== '') {
            dispatch(addColumn({id: shortid(), title: title, icon: icon, listId: props.listId})); // wywołanie akcji
            setTitle('');
            setIcon('');
        } else {
            alert('Proszę uzupełnić wszystkie pola!');
        }
    }
    
    const dispatch = useDispatch();

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    )
}

export default ColumnForm;
