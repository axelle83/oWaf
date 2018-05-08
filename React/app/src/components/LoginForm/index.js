/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
    if (this.props.data.title === 'Connexion') {
      this.props.loginSubmit();
    }
    else {
      this.props.newpassSubmit();
    }
  }

  render() {
    const { data, passSend, view } = this.props;
    return (
      <form id="loginform" onSubmit={this.onSubmit}>
        <h1 id="loginform-title">{data.title}</h1>
        {data.fields.map(field => <LoginField key={field.name} {...field} />)}
        <button id="loginform-submit" className={data.submit.className}>
          {data.submit.label}
        </button>
        <p
          id="passwordSend"
          className={
          classNames(
            'password',
            { 'password--send': passSend && view === 'password' },
          )
          }
        >
          Votre nouveau mot de passe vous attend dans votre boîte mail
        </p>
      </form>
    );
  }
}
LoginForm.propTypes = {
  loginSubmit: PropTypes.func.isRequired,
  passSend: PropTypes.bool.isRequired,
  newpassSubmit: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  data: PropTypes.shape({
    fields: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    title: PropTypes.string.isRequired,
    submit: PropTypes.shape({
      className: PropTypes.string,
      label: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
LoginForm.contextTypes = {
  router: PropTypes.object.isRequired,
};
/*
 * Export default
 */
export default LoginForm;
