import React from 'react';

/* Import Components */
import OptionsList from './OptionsList'

const SourceSelector = (props) => {
    return(
        <select id="sourceSelector">
            <OptionsList sources={props.sources}/>
        </select>
    );
}

export default SourceSelector;