import PropTypes from 'prop-types';

const PhotoType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    download_url: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  });

export default PhotoType;