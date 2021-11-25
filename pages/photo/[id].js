import { observer } from 'mobx-react'
import Image from 'next/image';
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

const Container = styled.div`
  margin: 0 auto;
  width: 800px;
  padding: 1empx;
`
export const getStaticPaths = async () => {
    const photo = await ( await fetch('https://picsum.photos/v2/list')).json();
    const paths = photo.map((p) => ({ params: { id: p.id } }));
    return { paths, fallback: false };
}
export const getStaticProps = async (context) => {
    const photos = await (
        await fetch('https://picsum.photos/v2/list')).json();
    const photo = photos.find((p) => p.id === context.params.id);
    return {
        props: {
            photo
        },
    };
}
export default observer(({ photo }) => {    
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
          < TableBody>
            <TableRow>
              <TableCell>
                <Image
                  width="80rem"
                  height="60rem"
                  alt={photo.author}
                  src={photo.download_url}
                />
              </TableCell>
              <TableCell>{photo.download_url}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Container>
  )
})
