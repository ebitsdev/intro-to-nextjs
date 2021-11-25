import PropTypes from 'prop-types'
import Link from 'next/link';
import {  
  Button,  
  TableCell, 
  TableRow,
} from '@material-ui/core'
import PhotoType from '../src/PhotoType'
const PhotoRow = ({ photo, onSelect }) => (
  // We use onSelect function when the user clicks on the button
  <>
    <TableRow key={photo.id}>
      <TableCell>
        <Link href={`/photo/${photo.id}`}>
          <a>{photo.author}</a>
        </Link>
      </TableCell>
      <TableCell>{photo.author}</TableCell>
      <TableCell>{photo.width}</TableCell>
      <TableCell>{photo.height}</TableCell>
      <TableCell>
        <a href={photo.url}>{photo.author}</a>
      </TableCell>
      <TableCell>
        <a href={photo.download_url}>Download</a>
      </TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSelect(photo)}
        >
          Show photo
        </Button>
      </TableCell>
    </TableRow>
  </>
)

PhotoRow.propTypes = {
  photo: PropTypes.shape(PhotoType).isRequired,
}

export default PhotoRow
