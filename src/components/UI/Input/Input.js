import React from 'react';
import classes from './Input.css'

const input = (props) => {
    let inputGroup = null;

    switch (props.inputtype) {
        case ('input'):
            inputGroup = (
                <div className={classes.InputGroup}>
                    <input
                        className={classes.Input}
                        value={props.value}
                        {...props.input} />
                    <label
                        className={classes.Label}
                        {...props.label} >
                        {props.label.text}
                    </label>
                </div>
            );
            break;
        case ('select'):
        
            inputGroup = (
                <div className={classes.InputGroup}>
                    <select
                        className={classes.InputSelect}
                        value={props.value}
                        {...props.select}>
                        <option {...props.defaultOption}>{props.defaultOption.text}</option>
                        {Object.keys(props.options).map(key=> (
                            <option key={key} value={key}>{props.options[key]}</option>
                        ))}
                    </select>
                </div>
            )

            break;
        default:
            inputGroup = <input className={classes.Input} {...props} />;
    }

    return inputGroup;

}

export default input;