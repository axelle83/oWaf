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
class LoginForm extends React.Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
    // const func = (this.props.data.submit.function);
    this.props.loginSubmit();
  }

  render() {
    const { data } = this.props;
    return (
      <form id="loginform" onSubmit={this.onSubmit}>
        <h1 id="loginform-title">{data.title}</h1>
        {/* <div id="loginform-desc">{data.desc}</div> */}
        {data.fields.map(field => <LoginField key={field.name} {...field} />)}
        <button id="loginform-submit" className={data.submit.className}>
          {data.submit.label}
        </button>
      </form>
    );
  }
}
LoginForm.propTypes = {
  loginSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    fields: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    submit: PropTypes.shape({
      className: PropTypes.string,
      label: PropTypes.string.isRequired,
      // function: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

/*
 * Export default
 */
export default LoginForm;
