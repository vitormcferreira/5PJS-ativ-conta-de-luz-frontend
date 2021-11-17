import React from 'react';
import PropTypes from 'prop-types';
import { MessageGroup } from './styled';

export default function ErrorMessages({ errors }) {
  const exibeErrors = (fieldErrors) =>
    fieldErrors.map((el) => (
      <div key={el} className="error">
        {el}
      </div>
    ));

  return <MessageGroup>{exibeErrors(errors)}</MessageGroup>;
}

ErrorMessages.defaultProps = {
  errors: [],
};

ErrorMessages.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};
