import { useMutation } from '@apollo/client';
import React from 'react';
import InputTextTag from "../solution/InputTextTag";
import { CREATE_ITEM_CANVAS } from "./operations/mutations";

const ENTER_KEY = 13;

export type CreateItemContainerProps = {
    canvas_id: string,
    setVisible: Function,
    item: string
}

const CreateItemContainer = ({ canvas_id, setVisible, item }: CreateItemContainerProps) => {

    const [addItemCanvas] = useMutation(CREATE_ITEM_CANVAS);

    const onKeyUp = ({ keyCode, target }: KeyboardEvent) => {
        if (keyCode == ENTER_KEY) {
            addItemCanvas(
                {
                    variables: { canvas_id, value: (target as HTMLInputElement).value, item },
                    update: (cache, { data: { createItemCanvas } }) => {
                        cache.modify({
                            fields: {
                                canvasBySolutionId: (existingItem) => ({ ...existingItem, [item]: createItemCanvas[item] })
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

export default CreateItemContainer;