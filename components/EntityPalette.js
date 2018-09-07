import React from 'react';
import PropTypes from 'prop-types';
import { entityInfo } from '../constants/entities';

const EntityIcon = ({ entityMeta, entityName, newEntityName, onClick }) => (
  <div className={`entity-icon ${newEntityName==entityName ? "highlight" : ""}`} onClick={() => onClick(entityName)}>
    <img title={entityName} src={entityMeta.icon} />
  </div>
);

EntityIcon.propTypes = {
  entityMeta: PropTypes.object.isRequired,
  entityName: PropTypes.string.isRequired,
  newEntityName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const EntityPalette = ({ newEntityName, onClick} ) => (
  <div className="entity-palette">
    {Object.keys(entityInfo).sort().map(entityName =>
      <EntityIcon key={entityName}
        entityName={entityName}
        newEntityName={newEntityName}
        entityMeta={entityInfo[entityName]}
        onClick={onClick}
      />
    )}
  </div>
);

EntityPalette.propTypes = {
  newEntityName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default EntityPalette;
