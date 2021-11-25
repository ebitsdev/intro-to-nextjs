import styled from "@emotion/styled";
import { CssBaseline } from "@material-ui/core";
import PhotoInfo from '../components/PhotoInfo'
import PhotoFilter from '../components/PhotoFilter'
import PhotoTable from '../components/PhotoTabe'



const Container = styled.div`
  margin: auto;
  max-width: 80%;
  padding-top: 1rem;
`
const Title = styled.h1`
  text-align: center;
`
// Create component using @emotion/styled
const TwoColumnLayout = styled.div`
  padding: 1rem;
  margin: auto;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`

function Home() {
  return (
    <Container>
      <CssBaseline />
      <TwoColumnLayout>
        <div>
          <Title>Photo Search</Title>
          <PhotoFilter />
          <PhotoTable />
        </div>
        <PhotoInfo />
      </TwoColumnLayout>
    </Container>
  )
}

export default Home;