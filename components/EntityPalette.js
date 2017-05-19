import React from 'react';
import PropTypes from 'prop-types';
import { entities_meta } from '../constants/entities'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../store/actions';


const EntityIcon = (props) => {
    const {entity_meta, newEntityName, selectNewEntity} = props
    const styles = {
        display: "inline-block",
        backgroundColor: `${newEntityName==entity_meta.name ? "orange" : "transparent "}`,
    }
    return (
     <div className="entity-icon" style={styles} onClick={() => selectNewEntity(entity_meta.name)}>
                <img title={entity_meta.name} src={entity_meta.icon} />
            </div>
    )

}

const EntityPalette = (props) => {
    const styles = {
        display: "inline-block",
    }

    const selectNewEntity = (newEntity) => props.actions.newEntity(newEntity)
    return (
        <div className="entity-palette" >
            {entities_meta.map(entity_meta =>
            <EntityIcon key={entity_meta.name} newEntityName={props.newEntityName} entity_meta={entity_meta} selectNewEntity={selectNewEntity}/>
            )}
        </div>
    )
    /*return (
        <div className="entity-palette" >
            {entities_meta.map(entity_meta =>
            <div className="entity-icon" key={entity_meta.name} style={styles} onClick={() => selectNewEntity(entity_meta.name)}>
                <img title={entity_meta.name} src={entity_meta.icon} />
            </div>
            )}
        </div>
    )*/

}

const mapStateToProps = state => ({
    newEntityName: state.newEntityName,
    // hovered: state.hovered
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const EntityPaletteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityPalette);


EntityPalette.propTypes = {
//   mode: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired
}

export default EntityPaletteContainer;