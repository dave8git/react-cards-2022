import styles from './TextInput.module.scss';

const TextInput = props => {
    return (<input className={styles.input} onChange={props.onChange} placeholder={props.placeholder} type="text" value={props.value}/>);
};

export default TextInput;