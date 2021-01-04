import React from 'react';
import PropTypes from "prop-types"
import Canvas from "./index"
import {LIST_CANVAS_BY_ID_QUERY} from "./operations/queries"
import { useQuery } from '@apollo/client';

const CanvasContainer = ({canva}) => {
    const { loading, error, data  } = useQuery(LIST_CANVAS_BY_ID_QUERY, {
      variables: { solution_id },
    });

    let canvas = data != undefined ? data.canvasBySolutionId : {};
    
    return (
      <Canvas canvas={canvas}/>
    )
}

CanvasContainer.propTypes = {
  canvas: PropTypes.object.isRequired
}

export default CanvasContainer;