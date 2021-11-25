import { Table } from '@material-ui/core'
import PhotoRow from './PhotoRow'
import { observer } from 'mobx-react'
import store from '../src/store';
function PhotoTable() {
  // We will get the reducer
  
  return (
    <Table width="100%">
      <tbody>
        {store.filteredPhoto
          .map((photo) => (
            <PhotoRow
              key={photo.id}
              photo={photo}
              onSelect={(photo) => store.setSelectedPhoto(photo)}
            />
          ))}
      </tbody>
    </Table>
  )
}

export default observer(PhotoTable);
