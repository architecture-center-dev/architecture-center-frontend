import { useMutation } from '@apollo/client';
import React from 'react';
import InputTextTag from "../solution/InputTextTag";
import {CREATE_ITEM_CANVAS} from "./operations/mutations";

const ENTER_KEY = 13;

const CreateItemContainer = ({canvas_id, setVisible, item}) => {

    const [addItemCanvas] = useMutation(CREATE_ITEM_CANVAS);
    
    const onKeyUp = ({keyCode, target})=> {
        if(keyCode == ENTER_KEY){
            console.log({ canvas_id, value: target.value, item });
            addItemCanvas(
                {variables:{ canvas_id, value: target.value, item },
                update: (cache, {data:{createItemCanvas}}) => {
                    console.log("CACHE", item, createItemCanvas[item]);
                    
                    cache.modify({
                      fields: {
                        canvasBySolutionId: (existingItem) => ({...existingItem, [item]: createItemCanvas[item]})
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

export default CreateItemContainer;