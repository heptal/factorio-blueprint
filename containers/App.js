import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actionCreators from '../store/actions'
import { upgrades } from '../constants/entities'

import Grid from '../components/Grid'
import BlueprintStringContainer from '../components/BlueprintString'
import JSONView from '../components/JSONView'
import ToolBar from '../components/ToolBar'
import EntityPalette from '../components/EntityPalette'
import UpgradeButton from '../components/UpgradeButton'
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
    const { blueprint, cellSize, newEntityName, mode, selected, actions } = this.props

    const selectMode = (mode) => actions.selectMode(mode);
    const modifyEntity = (entity, mode) => actions.modifyEntity(entity, mode);
    const placeEntity = (newEntityName, position) => actions.placeEntity(newEntityName, position);
    const batchUpgrade = (upgradable) => actions.batchUpgrade(upgradable);
    const increaseSize = () => actions.increaseSize();
    const decreaseSize = () => actions.decreaseSize();


    return (
      <div className="container">
        <div className="header">
          <div>
          <BlueprintStringContainer />
                  <ToolBar
          mode={mode}
          onClick={selectMode}
          increaseSize={increaseSize}
          decreaseSize={decreaseSize}
        />
          </div>
          <div className="batch-upgrades">Batch Upgrades
          <div>
            {Object.entries(upgrades).map( upgrade => (
              <UpgradeButton
                key={upgrade[0]}
                from={upgrade[0]}
                to={upgrade[1]}
                onClick={() => batchUpgrade(upgrade[0])}
              />
            ))}
          </div>
          </div>
          <EntityPalette newEntityName={newEntityName} />
          <Inspector entity={selected} />


        </div>

        <div className="grid-container">
          <Grid
            cellSize={cellSize}
            blueprint={blueprint}
            newEntityName={newEntityName}
            mode={mode}
            onEntityClick={modifyEntity}
            onCellClick={placeEntity}
          />
        </div>
        <JSONView blueprint={blueprint} />
      </div>
    )
  }
}

App.propTypes = {
  blueprint: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  cellSize: PropTypes.number.isRequired,
  newEntityName: PropTypes.string.isRequired,
  selected: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  const { blueprint, mode, selected, cellSize, newEntityName } = state

  return {
    blueprint,
    mode,
    cellSize,
    newEntityName,
    selected,
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
