import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useEffect, useState } from 'react';
import shortid from 'shortid';

const List = () => {
    const [columns, setColumns] = useState([
        {id: 1, title: 'Books', icon: 'book'}, 
        {id: 2, title: 'Movies', icon: 'film'},
        {id: 3, title: 'Games', icon: 'gamepad'},
    ]); 

    // useEffect(() => {
    //     setTimeout(() => {
    //         setColumns([...columns, {id: 4, title: 'Test column'}]);
    //         console.log(columns);
    //     }, 2000);
    // },[]);

    const addColumn = newColumn => {
        setColumns([...columns, { id: shortid(), title: newColumn.title }]);
      };
    
      
  
    return (
        <div>
            <header className={styles.header}>
                <h2>Things to do<span> soon</span></h2>
            </header>
            <p className={styles.description}>Interesting thigns I want to check out.</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)};
               {/* <Column title={"Books"} icon={"book"}/>
               <Column title={"Movies"} icon={"film"}/>
               <Column title={"Games"} icon={"play"}/> */}
            </section>
            <ColumnForm action={addColumn} />
        </div>
    );
};

export default List;