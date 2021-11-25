import {
  CssBaseline,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import PhotoRow from './PhotoRow'
import { observer } from 'mobx-react'
import store from '../src/store';
function PhotoTable() {
  // We will get the reducer
  
  return (
    <Table width="100%">
      <TableBody>
        {store.filteredPhoto
          .map((photo) => (
            <PhotoRow
              key={photo.id}
              photo={photo}
              onSelect={(photo) => store.setSelectedPhoto(photo)}
            />
          ))}
      </TableBody>
    </Table>
  )
}

export default observer(PhotoTable);
