import { useMutation } from '@apollo/client';
import React from 'react';
import InputTextTag from "./InputTextTag";
import {ADD_MEMBER_TO_SOLUTION} from "./operations/mutaions";

const ENTER_KEY = 13;

const InputTextTagContainer = ({solution_id, setVisible}) => {

    const [saveTemMeber] = useMutation(ADD_MEMBER_TO_SOLUTION);

    const onKeyUp = ({keyCode, target})=> {
        if(keyCode == ENTER_KEY){
            saveTemMeber(
                {variables:{ solution_id, team_member: target.value },
                update: (cache, {data:{createTeamMemberSolution}}) => {
                    cache.modify({
                      fields: {
                        solutionById: (existingSolution) => ({...existingSolution, team_members: createTeamMemberSolution.team_members})
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