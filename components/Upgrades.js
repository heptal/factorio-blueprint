import React from 'react';
import PropTypes from 'prop-types';
import { entityInfo } from '../constants/entities'
import {
  upgrades
} from '../constants/entities'

const UpgradeButton = (props) => (
        <div className="upgrade-button" onClick={props.onClick}>
          <img src={entityInfo[props.from].icon} /> <img className="upgrade-arrow" src="/graphics/arrows/indication-arrow-gui-ascending.png" /> <img src={entityInfo[props.to].icon} />
        </div>
)


const Upgrades = (props) => {

    return (
      <div className="batch-upgrades">
        {Object.entries(upgrades).map( upgrade => (
          <UpgradeButton
            key={upgrade[0]}
            from={upgrade[0]}
            to={upgrade[1]}
            onClick={() => props.onClick(upgrade[0])}
          />
        ))}
      </div>
    )


}

export default Upgrades;