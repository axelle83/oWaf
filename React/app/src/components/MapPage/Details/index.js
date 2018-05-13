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

/*
* Code
*/
class Details extends React.Component {
  handleSubmit = (evt) => {
    // J'empeche le comportement par défaut
    evt.preventDefault();
    this.props.onPlaceSubmit();
  }

  render() {
    const { newPlace } = this.props;
    return (
      <form id="details" onSubmit={this.handleSubmit}>
        {fields.places.map(field => <MapField key={field.name} {...field} />)}
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
        <button
          id="place-submit"
          onClick={this.onSubmit}
        >
          Ajouter
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
  newPlace: PropTypes.bool.isRequired,
};

/*
* Export Default
*/
export default Details;
