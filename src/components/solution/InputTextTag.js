import React, { useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { TextField } from '@material-ui/core';

const InputTextTag = ({label, onKeyUp, onFocusOut}) => {
    const inputEl = useRef(null);
    useEffect(() => {
        inputEl.current.querySelector('input').focus();
        
    },[])
    return(
        <TextField 
            ref={inputEl}
            label={label} 
            variant="outlined" 
            fullWidth
            onKeyUp={onKeyUp}
            onBlur={onFocusOut}
            size="small"
            />
    )
}

export default InputTextTag;

InputTextTag.prototype = {
    label: PropTypes.string.isRequired,
    onKeyUp: PropTypes.func.isRequired,
    onFocusOut: PropTypes.func.isRequired,
}