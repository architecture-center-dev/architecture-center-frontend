import { useMutation } from '@apollo/client';
import React from 'react';
import InputTextTag from "./InputTextTag";
import { ADD_TAG_TO_SOLUTION } from "./operations/mutaions";

const ENTER_KEY = 13;

export type InputTextTagContainerProps = {
    solution_id: string,
    setVisible: Function
}

const InputTextTagContainer = ({ solution_id, setVisible }: InputTextTagContainerProps) => {

    const [saveTemMeber] = useMutation(ADD_TAG_TO_SOLUTION);

    const onKeyUp = ({ keyCode, target }: KeyboardEvent) => {
        if (keyCode == ENTER_KEY) {
            saveTemMeber(
                {
                    variables: { solution_id, tag: (target as HTMLInputElement).value },
                    update: (cache, { data: { createTagSolution } }) => {
                        cache.modify({
                            fields: {
                                solutionById: (existingSolution) => ({ ...existingSolution, tags: createTagSolution.tags })
                            }
                        })
                    }
                });

            (target as HTMLInputElement).value = '';
            setVisible(false);
        }
    }

    const onFocusOut = () => {
        setVisible(false);
    }

    return (
        <InputTextTag
            label="Type and press ENTER"
            onKeyUp={onKeyUp}
            onFocusOut={onFocusOut}
        />
    )
}

export default InputTextTagContainer;