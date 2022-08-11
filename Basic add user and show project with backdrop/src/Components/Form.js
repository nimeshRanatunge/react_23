import React, { useState, useRef, useEffect } from "react";
import classes from "./Form.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from '../Error/ErrorModal'

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const fstnameRef = useRef(null);
  const [error, setError] = useState();

  useEffect(() => {
    fstnameRef.current.focus();
  }, []);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const AgeInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const dataSet = {
    id: Math.random(),
    userN: enteredName,
    age: enteredAge
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid details ( non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      //plus 1 +1 to convert string to number
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age.",
      });
      return;
    }
    props.sendToAPP(dataSet);
    setEnteredName('');
    setEnteredAge('');
  };


  const errorHandler = () => {
    setError(null);
  };

  return (
  <div>
    {error&& <ErrorModal errorBody={error} onConfirm={errorHandler}/>}
     <Card>
       <form onSubmit={SubmitHandler}>
        <div className={classes.form_item}>
          <label htmlFor="username">User Name</label>
          <input
            
            id="username"
            value={enteredName}
            onChange={nameInputChangeHandler}
            type="text"
            ref={fstnameRef}
          ></input>
        </div>
        <div className={classes.form_item}>
          <label htmlFor="age">Age (Years)</label>
          <input
            
            id="age"
            value={enteredAge}
            onChange={AgeInputChangeHandler}
            type="number"
           
            step="1"
          ></input>
        </div>
        <Button type='submit' value='Add User' crdX={classes.button}/>
      </form>
   </Card>
  </div>
  );
};

export default Form;
