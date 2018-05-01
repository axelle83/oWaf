/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/*
 * Local import
 */
import LoginField from 'src/containers/LoginField';


/*
 * Code
 */
const LoginForm = ({ data }) => (
  <form id="form">
    {data.fields.map(field => <LoginField key={field.name} {...field} />)}
    <button id="form-submit" className={data.submit.className}>
      {data.submit.label}
    </button>
  </form>
);
LoginForm.propTypes = {
  data: PropTypes.shape({
    fields: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    submit: PropTypes.shape({
      className: PropTypes.string,
      label: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

/*
 * Export default
 */
export default LoginForm;
