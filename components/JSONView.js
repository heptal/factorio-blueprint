import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    width: "800px",
    height: "200px",
    overflow: "scroll",
    fontFamily: "monospace",
    background: "white"
}
const JSONView = ({blueprint}) => {
    return (
        <div style={styles}>
            {JSON.stringify(blueprint)}
        </div>
    )
}

JSONView.propTypes = {
  blueprint: PropTypes.object,
}

export default JSONView;
