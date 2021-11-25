
import { Table } from '@material-ui/core'
import { observer } from 'mobx-react'
import store from '../src/store';

const PhotoInfo = () => {
  // Destructuring the state
  return store.selectedPhoto ? (
    <div>
      <h2>{store.selectedPhoto.author}</h2>
      <Table>
        <tbody>
          <tr>
            <td>
              <img
                width="180px"
                alt={store.selectedPhoto.author}
                src={store.selectedPhoto.download_url}
              />
            </td>
            <td>{store.selectedPhoto.author}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  ) : null
}
export default observer(PhotoInfo);
