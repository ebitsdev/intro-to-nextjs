import { useRouter } from 'next/router'
import { observer } from 'mobx-react'

import {
  CssBaseline,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import styled from '@emotion/styled'
import store from '../../src/store'

const Container = styled.div`
  margin: 0 auto;
  width: 800px;
  padding: 1empx;
`
// const TypeHeader = styled.span`
//     font-weight: bold;
// `

export default observer(() => {
  const router = useRouter()
  const photo = store.photo.find((p) => p.id === (router.query.id))
  return (
    <Container>
      <CssBaseline />
      <div>          
        <h1><Link href="/"><a>Home</a></Link> | {photo.author}</h1>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <h2>{photo.author}</h2>
                    </TableCell>
                    <TableCell>
                        <h2>{photo.width} x {photo.height}</h2>
                    </TableCell>
                </TableRow>
            </TableHead>
          <tbody>
            <tr>
              <td>
                <img
                  width="180px"
                  alt={photo.author}
                  src={photo.download_url}
                />
              </td>
              <td>{photo.download_url}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  )
})
