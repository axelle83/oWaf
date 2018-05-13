/*
*  Npm Import
*/
import React from 'react';
import PropTypes from 'prop-types';


/*
* Local Import
*/
/*
* Code
*/
class Details extends React.Component {
  static propTypes = {
    // inputValue: PropTypes.string.isRequired,
    // actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  };


  handleChange = (evt) => {
    // Je recup la value depuis la cible de l'event
    const { value } = evt.target;
    // j'exécute la fonction fournie en passant la value
    this.props.actions.changeInputForm(value);
  }

  handleSubmit = (evt) => {
    // J'empeche le comportement par défaut
    evt.preventDefault();
  }

  render() {
    const { inputValue } = this.props;
    return (
      <form id="details" onSubmit={this.handleSubmit}>
        <input
          className="details-name"
          type="text"
          placeholder="Nom du lieu"
          value={inputValue}
          onChange={this.handleChange}
        />
        <input
          className="details-address"
          type="text"
          placeholder="Adresse du lieu"
          value={inputValue}
          onChange={this.handleChange}
        />
        <input
          className="details-gps"
          type="Number"
          placeholder="Coordonnées GPS"
          value={inputValue}
          onChange={this.handleChange}
        />
        <p className="check"> Laisse <input
          className="details-laisse"
          type="checkbox"
          value={inputValue}
        />
        </p>
        <p className="check"> Fontaine <input
          className="details-fontaine"
          type="checkbox"
          value={inputValue}
        />
        </p>
        <p className="check"> Sac de déjection <input
          className="details-sac"
          type="checkbox"
          value={inputValue}
        />
        </p>
      </form>
    );
  }
}


/*
* Export Default
*/
export default Details;
