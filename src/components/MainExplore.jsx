import { Button, Col, Container, Row } from 'react-bootstrap'

const MainExplore = () => {
  return (
    <Container>
      <h5>Altro da esplorare</h5>
      <Row className=' g-3'>
        <Col xs={12} md={4}>
          <Button className='w-100 d-flex justify-content-between py-3 bg-dark text-danger border-0'>
            Esplora per genere <i className='bi bi-chevron-right'></i>
          </Button>
        </Col>
        <Col xs={12} md={4}>
          <Button className='w-100 d-flex justify-content-between py-3 bg-dark text-danger border-0'>
            Decenni <i className='bi bi-chevron-right'></i>
          </Button>
        </Col>
        <Col xs={12} md={4}>
          <Button className='w-100 d-flex justify-content-between py-3 bg-dark text-danger border-0'>
            Attività e stati d&lsquo;animo{' '}
            <i className='bi bi-chevron-right'></i>
          </Button>
        </Col>
        <Col xs={12} md={4}>
          <Button className='w-100 d-flex justify-content-between py-3 bg-dark text-danger border-0'>
            Worldwide <i className='bi bi-chevron-right'></i>
          </Button>
        </Col>
        <Col xs={12} md={4}>
          <Button className='w-100 d-flex justify-content-between py-3 bg-dark text-danger border-0'>
            Classifiche <i className='bi bi-chevron-right'></i>
          </Button>
        </Col>
        <Col xs={12} md={4}>
          <Button className='w-100 d-flex justify-content-between py-3 bg-dark text-danger border-0'>
            Audio spaziali <i className='bi bi-chevron-right'></i>
          </Button>
        </Col>
        <Col xs={12} md={4}>
          <Button className='w-100 d-flex justify-content-between py-3 bg-dark text-danger border-0'>
            Video musicali <i className='bi bi-chevron-right'></i>
          </Button>
        </Col>
        <Col xs={12} md={4}>
          <Button className='w-100 d-flex justify-content-between py-3 bg-dark text-danger border-0'>
            Nuovi artisti <i className='bi bi-chevron-right'></i>
          </Button>
        </Col>
        <Col xs={12} md={4}>
          <Button className='w-100 d-flex justify-content-between py-3 bg-dark text-danger border-0'>
            Hit del passato <i className='bi bi-chevron-right'></i>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default MainExplore
