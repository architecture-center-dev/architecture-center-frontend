import React from 'react';
import PropTypes from "prop-types"
import Canvas from "./index"
import {LIST_CANVAS_BY_ID_QUERY} from "./operations/queries"
import { useQuery } from '@apollo/client';

const CanvasContainer = ({solution_id}) => {
    const { loading, error, data  } = useQuery(LIST_CANVAS_BY_ID_QUERY, {
      variables: { solution_id },
    });

    const canvas = data != undefined? data.canvasBySolutionId : {};

    return (
      <Canvas canvas={canvas}/>
    )
}

CanvasContainer.propTypes = {
  solution_id: PropTypes.string.isRequired
}


export default CanvasContainer;