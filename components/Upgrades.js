import React from 'react';
import PropTypes from 'prop-types';
import { entityInfo } from '../constants/entities';
import { upgrades } from '../constants/entities';

const UpgradeButton = ({ from, to, onClick }) => (
  <div className="upgrade-button" onClick={onClick}>
    <img src={entityInfo[from].icon} />
    <img className="upgrade-arrow" src="/graphics/arrows/indication-arrow-gui-ascending.png" />
    <img src={entityInfo[to].icon} />
  </div>
);

UpgradeButton.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Upgrades = ({ onClick }) => (
  <div className="batch-upgrades">
    {Object.entries(upgrades).map( upgrade => (
      <UpgradeButton
        key={upgrade[0]}
        from={upgrade[0]}
        to={upgrade[1]}
        onClick={() => onClick(upgrade[0])}
      />
    ))}
  </div>
);

Upgrades.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Upgrades;
