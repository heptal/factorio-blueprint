import React from 'react';
import PropTypes from 'prop-types';
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'

import { selectMode, increaseSize, decreaseSize } from '../store/actions'

const modes = [
    "inspect",
    "remove",
    "rotate"
]

const ToolBar = ({ mode, selectMode, increaseSize, decreaseSize, canUndo, canRedo, onUndo, onRedo }) => (
    <div className="toolbar">
        {modes.map(modeString =>
        <div className={modeString==mode ? "active-mode" : ""} key={modeString} onClick={() => selectMode(modeString)}>{modeString}</div>
        )}
        <div onClick={increaseSize}>+</div>
        <div onClick={decreaseSize}>-</div>
        <div onClick={onUndo} disabled={!canUndo}>undo</div>
        <div onClick={onRedo} disabled={!canRedo}>redo</div>
    </div>
)

ToolBar.propTypes = {
  mode: PropTypes.string.isRequired,
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
  selectMode: PropTypes.func.isRequired,
  increaseSize: PropTypes.func.isRequired,
  decreaseSize: PropTypes.func.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
    canUndo: state.blueprint.past.length > 0,
    canRedo: state.blueprint.future.length > 0
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseSize: () => dispatch(increaseSize()),
    decreaseSize: () => dispatch(decreaseSize()),
    selectMode: (mode) => dispatch(selectMode(mode)),
    onUndo: () => dispatch(UndoActionCreators.undo()),
    onRedo: () => dispatch(UndoActionCreators.redo()),
  }
}

const ToolbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolBar)

export default ToolbarContainer;