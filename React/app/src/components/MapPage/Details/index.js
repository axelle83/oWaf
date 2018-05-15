/*
*  Npm Import
*/
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/*
* Local Import
*/
import fields from 'src/datas/map';
import MapField from 'src/containers/MapField';
import MapCheck from 'src/containers/MapCheck';
import MapSelect from 'src/containers/MapSelect';

/*
* Code
*/
class Details extends React.Component {
  handleSubmit = (evt) => {
    // J'empeche le comportement par défaut
    evt.preventDefault();
    this.props.onPlaceSubmit();
  }

  handleClose = () => {
    this.props.addForm();
  }

  render() {
    const { newPlace } = this.props;
    return (
      <form id="details" onSubmit={this.handleSubmit}>
        {fields.places.map(field => <MapField key={field.name} {...field} />)}
        <MapSelect name="category" />
        {fields.check.map(field => <MapCheck key={field.name} {...field} />)}
        <p
          id="newPlaceSend"
          className={
          classNames(
            'newPlace',
            { 'newPlace--true': newPlace },
          )
          }
        >
          Le nouveau lieu a bien été ajouté !
        </p>

        <div className="mandatory-map">* Champs obligatoires</div>
        <button
          type="submit"
          id="place-submit"
          onClick={this.onSubmit}
          className={
            classNames(
            'add',
            { 'add--true': !newPlace },
            )
          }
        >
          Ajouter
        </button>
        <button
          onClick={this.handleClose}
          id="place-close"
          className={
            classNames(
            'add',
            { 'add--true': newPlace },
            )
          }
        >
          Fermer
        </button>
      </form>
    );
  }
}

/*
* PropTypes
*/
Details.propTypes = {
  onPlaceSubmit: PropTypes.func.isRequired,
  addForm: PropTypes.func.isRequired,
  newPlace: PropTypes.bool.isRequired,
};

/*
* Export Default
*/
export default Details;
