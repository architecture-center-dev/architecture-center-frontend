import { useMutation } from '@apollo/client';
import React from 'react';
import InputTextTag from "./InputTextTag";
import {ADD_TAG_TO_SOLUTION} from "./operations/mutaions";

const ENTER_KEY = 13;

const InputTextTagContainer = ({solution_id, setVisible}) => {

    const [saveTemMeber] = useMutation(ADD_TAG_TO_SOLUTION);

    const onKeyUp = ({keyCode, target})=> {
        if(keyCode == ENTER_KEY){
            saveTemMeber(
                {variables:{ solution_id, tag: target.value },
                update: (cache, {data:{createTagSolution}}) => {
                    cache.modify({
                      fields: {
                        solutionById: (existingSolution) => ({...existingSolution, tags: createTagSolution.tags})
                      }
                    })
                  }
            });

            target.value = '';
            setVisible(false);
        }
    }
    
    const onFocusOut = ()=> {
        setVisible(false);
    }

    return(
        <InputTextTag 
            label="Type and press ENTER" 
            onKeyUp={onKeyUp}
            onFocusOut={onFocusOut}
            />
    )
}

export default InputTextTagContainer;