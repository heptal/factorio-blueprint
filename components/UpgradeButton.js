import React from 'react';
import PropTypes from 'prop-types';
import {upgrades, entities_meta} from '../constants/entities'


const UpgradeButton = props => {
    const {from, to, onClick} = props;

    const from_meta = entities_meta.find(function(entity) {
      return entity.name == from;
    })
    const to_meta = entities_meta.find(function(entity) {
      return entity.name == to;
    })


    return (
        <div className="upgrade-button" onClick={onClick}>
          <img src={from_meta.icon} /> &raquo; <img src={to_meta.icon} />
        </div>
    )
}

export default UpgradeButton