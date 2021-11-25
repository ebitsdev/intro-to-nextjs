import PropTypes from 'prop-types'
import Link from 'next/link';

import { Button } from '@material-ui/core'
import PhotoType from '../src/PhotoType'
const PhotoRow = ({ photo, onSelect }) => (
  // We use onSelect function when the user clicks on the button
  <>
    <tr key={photo.id}>
      <td>
        <Link href={`/photo/${photo.id}`}>
          <a>{photo.author}</a>
        </Link>
      </td>
      <td>{photo.author}</td>
      <td>{photo.width}</td>
      <td>{photo.height}</td>
      <td>
        <a href={photo.url}>{photo.author}</a>
      </td>
      <td>
        <a href={photo.download_url}>Download</a>
      </td>
      <td>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSelect(photo)}
        >
          Show photo
        </Button>
      </td>
    </tr>
  </>
)

PhotoRow.propTypes = {
  photo: PropTypes.shape(PhotoType).isRequired,
}

export default PhotoRow
