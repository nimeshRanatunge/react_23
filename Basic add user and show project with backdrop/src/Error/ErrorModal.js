import classes from './ErrorModal.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const ErrorModal = (props) =>{
    return(
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}></div>
            <Card cardX={classes.modal}>
                
                <header className={classes.header}>
                    <h2>{props.errorBody.title}</h2>
                </header>

                <div className={classes.content}>
                <p>
                    {props.errorBody.message}
                </p>
            </div>

            <footer className={classes.actions}>
                <Button onClick={props.onConfirm} value='OK'>Okay</Button>
            </footer>

            </Card>
        </div>
    );
}

export default ErrorModal;