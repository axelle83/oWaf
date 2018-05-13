/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Component
 */
export default class SubscribeUpload extends React.Component {
  /*
   * PropTypes
   */
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  }

  fileChangedHandler = (event) => {
    const file = event.target.files[0];
    console.log(file);
    this.props.onChange(file);
    // this.setState({ selectedFile: event.target.files[0] });
  }

  uploadHandler = () => {
    // console.log(this.props.selectedFile);
  }
  /*
   * Render
   */
  render() {
    const { name } = this.props;
    return (
      <div id="subscribe-dog-image">
        <label id="subscribe-dog-image-label">
          Sélectionner une photo
          <input
            name={name}
            id="subscribe-dog-image-file"
            type="file"
            onChange={this.fileChangedHandler}
            accept=".jpg, .jpeg, .png"
          />
        </label>
        <button
          id="subscribe-dog-image-upload"
          onClick={this.uploadHandler}
        >
          Ajouter la photo
        </button>
      </div>
    );
  }
}
