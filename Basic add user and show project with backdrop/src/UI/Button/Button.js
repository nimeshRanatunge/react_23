import classes from './Button.module.css';

const Button =(props)=>{
    return (
        <button onClick={props.onClick} type={props.type} className={`${classes.button} ${props.crdX}`}>{props.value}</button>
    );
}

export default Button;