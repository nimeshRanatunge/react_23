import React from 'react';
import classes from './DataItem.module.css';

const DataItem = (props)=> {
    return(
        <div className={classes.items}>
            <h2>{props.data.userN}</h2>
            <h2>{props.data.age} Years old..</h2>
        </div>
    );
}

export default DataItem;