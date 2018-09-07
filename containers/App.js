import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actionCreators from '../store/actions'

import Grid from '../components/Grid'
import BlueprintString from '../components/BlueprintString'
import JSONView from '../components/JSONView'
import ToolBar from '../components/ToolBar'
import EntityPalette from '../components/EntityPalette'
import Upgrades from '../components/Upgrades'
import Inspector from '../components/Inspector'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  // componentDidMount() {
  // }

  // componentWillReceiveProps(nextProps) {
  // }

  render() {
    const {
      blueprint,
      cellSize,
      newEntityName,
      newEntityDirection,
      mode,
      selected,
      actions
    } = this.props

    return (
      <div id="container">
        <header>
          <div>
          <BlueprintString blueprint={blueprint} decodeBlueprint={actions.processBlueprintString}/>
          <ToolBar />
          </div>
          <EntityPalette newEntityName={newEntityName} onClick={actions.selectNewEntity}/>
          <Upgrades onClick={actions.batchUpgrade} />
          {selected.entity_number &&
            <Inspector entity={selected} />
          }
        </header>
        <div id="content">
          <Grid
            cellSize={cellSize}
            blueprint={blueprint}
            newEntityName={newEntityName}
            newEntityDirection={newEntityDirection}
            mode={mode}
            onEntityClick={actions.modifyEntity}
            onCellClick={actions.placeEntity}
          />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  blueprint: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  cellSize: PropTypes.number.isRequired,
  newEntityName: PropTypes.string.isRequired,
  newEntityDirection: PropTypes.number.isRequired,
  selected: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  const {
    blueprint,
    mode,
    selected,
    cellSize,
    newEntityName,
    newEntityDirection
  } = state

  return {
    blueprint: blueprint.present,
    mode,
    selected,
    cellSize,
    newEntityName,
    newEntityDirection,
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
