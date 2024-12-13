import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MainNews from './components/MainNews'
import MainNewRadio from './components/MainNewRadio'
import MainNewReleases from './components/MainNewReleases'
import MainNewReleases2 from './components/MainNewReleases2'
import MainExplore from './components/MainExplore'
import MyFooter from './components/MyFooter'
import { Col, Container, Row } from 'react-bootstrap'
import CustomSidebar from './components/CustomSidebar'

function App() {
  return (
    <>
      <Container fluid className='bg-black text-light'>
        <Row>
          <Col lg={2} className='position-sticky'>
            <CustomSidebar />
          </Col>
          <Col lg={10}>
            <MyNavbar />
            <MainNews />
            <MainNewRadio />
            <MainNewReleases />
            <MainNewReleases2 />
            <MainExplore />
            <MyFooter />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
