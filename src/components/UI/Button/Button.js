import React from 'react';

import classes from './Button.css';

const Button =(props) =>{

    let btnStyle=[classes.btn]
    
    switch (props.type) {
        case "btnVideo":
            btnStyle.push(classes.btnVideo)
            break;
    
        default:
            break;
    }
    return (
        <button 
            className={btnStyle.join(' ')}
            onClick={props.clicked} >
            {props.children}
        </button>
    );
}

export default Button;