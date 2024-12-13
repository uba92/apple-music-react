import { Col, Container, Row, Card } from 'react-bootstrap'

const MainNewRadio = () => {
  return (
    <Container className=' mt-5'>
      <Row>
        <h5>
          Nuovi episodi radio <i className='bi bi-chevron-right'></i>
        </h5>
        <Col>
          <Card className=' border-0'>
            <Card.Img
              variant='top'
              src='src/assets/assets/images/2a.png'
              className=' rounded-3'
            />
            <Card.Body>
              <Card.Title>Prologo con Abuelo</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=' border-0'>
            <Card.Img
              variant='top'
              src='src/assets/assets/images/2b.png'
              className=' rounded-3'
            />
            <Card.Body>
              <Card.Title>The Wanderer</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=' border-0'>
            <Card.Img
              variant='top'
              src='src/assets/assets/images/2c.png'
              className=' rounded-3'
            />
            <Card.Body>
              <Card.Title>Michael Bublé & Carly Pearce</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className=' d-none d-md-block'>
          <Card className=' border-0'>
            <Card.Img
              variant='top'
              src='src/assets/assets/images/2d.png'
              className=' rounded-3'
            />
            <Card.Body>
              <Card.Title>Stephan Moccio: The Zane Lowe Interview</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className=' d-none d-lg-block'>
          <Card className=' border-0'>
            <Card.Img
              variant='top'
              src='src/assets/assets/images/2f.png'
              className=' rounded-3'
            />
            <Card.Body>
              <Card.Title>Chart Spotlight: Julia Michaels</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MainNewRadio
