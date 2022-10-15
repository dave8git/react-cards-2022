import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    const [newSearchString, setSearchString] = useState('');
    const dispatch = useDispatch();
    console.log(newSearchString);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateSearchString(newSearchString)); // skrócona wersja może być newSearchString: newSearchString
        setSearchString('');
        StaticRange.searchString = '';
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..." value={newSearchString} onChange={e=>setSearchString(e.target.value)}/>
            <Button>
                <span className="fa fa-search"/>
            </Button>
        </form>
    );
  };

  export default SearchForm;