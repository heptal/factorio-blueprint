import React from 'react';
import PropTypes from 'prop-types';


const Inspector = props => {
    const { entity } = props;
    // const cellStyle = {
    //   gridColumn: `${x}`,
    //   gridRow: `${y}`,
    // };
    const style = {

    }

    return (

        <div className="inspector" style={style}>
            {entity &&
                <div>{entity.name}</div>
            }
            {entity && entity.recipe &&
                <div>{entity.recipe}</div>
            }
        </div>


    )
}

export default Inspector