/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/*
 * Local import
 */


/*
 * Code
 */
const ChangeView = ({
  active,
  back,
  data,
  changeView,
}) => {
  if (!active) {
    return null;
  }
  return (
    <a
      className={classNames(
        'changeview',
        { 'changeview--back': back },
      )}
      onClick={changeView}
    >
      {data.link}
    </a>
  );
};
ChangeView.propTypes = {
  active: PropTypes.bool.isRequired,
  back: PropTypes.bool,
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
  }).isRequired,
  changeView: PropTypes.func.isRequired,
};
ChangeView.defaultProps = {
  back: false,
};


/*
 * Export default
 */
export default ChangeView;
