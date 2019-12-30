import React from 'react';

const OptionsList = (props) => {

    const data = props.sources;
    let sourceOptions = [];


    if(data.length > 0) {

        sourceOptions = data.map(source => {
            return (
                <option value={source.id} key={source.id}> 
                    {source.name}
                </option>
            );
        });

    } else {
        return (
            <option value='Sin resultados'> 
                Sin resultados
            </option>
        );
    }

    return (
        sourceOptions
    );

}

export default OptionsList;