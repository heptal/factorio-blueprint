import React from 'react';
import PropTypes from 'prop-types';
import { encode } from '../utils/blueprint';

const BlueprintString = ({ blueprint, decodeBlueprint }) => (
  <textarea className="blueprintstring"
    type="text"
    spellCheck="false"
    placeholder="Paste blueprint string here"
    autoFocus="true"
    onChange={e => decodeBlueprint(e.target.value)}
    value={blueprint.entities.length > 0 ? encode({blueprint}) : ""}
  />
);

BlueprintString.propTypes = {
  blueprint: PropTypes.object.isRequired,
  decodeBlueprint: PropTypes.func.isRequired
};

export default BlueprintString;
