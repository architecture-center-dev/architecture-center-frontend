import React, { useEffect, useRef } from 'react';
import { TextField } from '@material-ui/core';

export type InputTextTagProps = {
    label: string, 
    onKeyUp: any, 
    onFocusOut: any
}

const InputTextTag = ({label, onKeyUp, onFocusOut}: InputTextTagProps) => {
    const inputEl: any = useRef(null);
    useEffect(() => {
        inputEl.current.querySelector('input').focus();
        
    },[])
    return(
        <TextField 
            data-testid="input-tag"
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
