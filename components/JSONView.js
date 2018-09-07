import React from 'react';
import PropTypes from 'prop-types';

const JSONView = ({ blueprint }) => (
  <div className="json-view">{JSON.stringify(blueprint)}</div>
);

JSONView.propTypes = {
  blueprint: PropTypes.object.isRequired,
};

export default JSONView;
