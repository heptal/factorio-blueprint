import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    width: "800px",
    height: "200px",
    overflow: "scroll",
    fontFamily: "monospace"
}

const modes = [
    "select",
    "remove",
    "rotate"
]

const ToolBar = ({mode, onClick, increaseSize, decreaseSize}) => {
    return (
        <div className="toolbar">
            {modes.map(modeString =>
            <div type="button" key={modeString} onClick={ () => onClick(modeString)}>{modeString}</div>
            )}
            <div onClick={ () => increaseSize()} type="button">+</div>
            <div onClick={ () => decreaseSize()} type="button">-</div>
        </div>
    )
}

ToolBar.propTypes = {
  mode: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ToolBar;