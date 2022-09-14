import styles from './List.module.scss';
import Column from '../Column/Column'
const List = () => {
    return (
        <div>
            <header className={styles.header}>
                <h2>Things to do<span> soon</span></h2>
            </header>
            <p className={styles.description}>Interesting thigns I want to check out.</p>
            <section className={styles.columns}>
               <Column title={"Books"} icon={"book"}/>
               <Column title={"Movies"} icon={"film"}/>
               <Column title={"Games"} icon={"play"}/>
            </section>
        </div>
    );
};

export default List;