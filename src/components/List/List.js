import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useEffect, useState } from 'react';
import shortid from 'shortid';

const List = () => {
    const [columns, setColumns] = useState([
        {
            id: 1,
            title: 'Books',
            icon: 'book',
            cards: [
                { id: 1, title: 'This is Going to Hurt' },
                { id: 2, title: 'Interpreter of Maladies' }
            ]
        },
        {
            id: 2,
            title: 'Movies',
            icon: 'film',
            cards: [
                { id: 1, title: 'Harry Potter' },
                { id: 2, title: 'Star Wars' }
            ]
        },
        {
            id: 3,
            title: 'Games',
            icon: 'gamepad',
            cards: [
                { id: 1, title: 'The Witcher' },
                { id: 2, title: 'Skyrim' }
            ]
        }
    ]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setColumns([...columns, {id: 4, title: 'Test column'}]);
    //         console.log(columns);
    //     }, 2000);
    // },[]);

    const addColumn = newColumn => {
        setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]);
      };
    
      const addCard = (newCard, columnId) => {
        const columnsUpdated = columns.map(column => {
            if(column.id === columnId)
                return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title }]}
            else
                return column
        })
    
        setColumns(columnsUpdated);
    
    };
      
  
    return (
        <div>
            <header className={styles.header}>
                <h2>Things to do<span> soon</span></h2>
            </header>
            <p className={styles.description}>Interesting thigns I want to check out.</p>
            <section className={styles.columns}>
                {columns.map(column => <Column key={column.id} {...column} action={addCard} />)};
                {/* {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} cards={column.cards} action={addCard} id={column.id} />)} */}
               {/* <Column title={"Books"} icon={"book"}/>
               <Column title={"Movies"} icon={"film"}/>
               <Column title={"Games"} icon={"play"}/> */}
            </section>
            <ColumnForm action={addColumn} />
        </div>
    );
};

export default List;