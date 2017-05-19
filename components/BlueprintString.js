import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { encode } from '../utils/blueprint';
import { processBlueprintString } from '../store/actions';


const BlueprintString = (props) => {
  const { blueprint, decodeBlueprint } = props
  const blueprintString = blueprint.blueprint.entities.length > 0 ? encode(blueprint) : ""
  // const blueprintString = ""
  return (
      <textarea id="blueprintstring"
        type="text"
        autoFocus="true"
        onChange={e => props.decodeBlueprint(e.target.value)}
        value={blueprintString}
      />
  );
};

const mapStateToProps = state => ({
    blueprint: state.blueprint
});

const mapDispatchToProps = dispatch => ({
    decodeBlueprint: blueprintString => {
      dispatch(processBlueprintString(blueprintString))
    }
});

const BlueprintStringContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlueprintString);

BlueprintString.propTypes = {
  blueprint: PropTypes.object,
  decodeBlueprint: PropTypes.func.isRequired
}

export default BlueprintStringContainer;
