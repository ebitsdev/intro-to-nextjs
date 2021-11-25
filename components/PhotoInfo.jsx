import Image from 'next/image'
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import { observer } from 'mobx-react'
import store from '../src/store';

const PhotoInfo = () => {
  // Destructuring the state
  return store.selectedPhoto ? (
    <div>
      <h2>{store.selectedPhoto.author}</h2>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Image
                width="60rem"
                height="60rem%"
                alt={store.selectedPhoto.author}
                src={store.selectedPhoto.download_url}
              />
            </TableCell>
            <TableCell>{store.selectedPhoto.author}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ) : null
}
export default observer(PhotoInfo);
