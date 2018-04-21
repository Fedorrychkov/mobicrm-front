import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const CircularProgressComponent = (props) => {
    let state = { size: props.size };
    return (
        <div>
            <CircularProgress size={state.size}/>
        </div>
    )
};

export default CircularProgressComponent;