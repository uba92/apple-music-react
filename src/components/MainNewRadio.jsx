import { Col, Container, Row, Card } from 'react-bootstrap'

const MainNewRadio = () => {
  return (
    <Container className=' mt-5'>
      <Row>
        <h5>
          Nuovi episodi radio <i className='bi bi-chevron-right'></i>
        </h5>
        <Col>
          <Card className='bg-black text-light border-0'>
            <Card.Img
              variant='top'
              src='src/assets/assets/images/2a.png'
              className=' rounded-3'
            />
            <Card.Body>
              <Card.Title className='text-secondary fs-6'>
                Prologo con Abuelo
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='bg-black text-light border-0'>
            <Card.Img
              variant='top'
              src='src/assets/assets/images/2b.png'
              className=' rounded-3'
            />
            <Card.Body>
              <Card.Title className='text-secondary fs-6'>
                The Wanderer
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='bg-black text-light border-0'>
            <Card.Img
              variant='top'
              src='src/assets/assets/images/2c.png'
              className=' rounded-3'
            />
            <Card.Body>
              <Card.Title className='text-secondary fs-6'>
                Michael Bublé & Carly Pearce
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className=' d-none d-md-block'>
          <Card className='bg-black text-light border-0'>
            <Card.Img
              variant='top'
              src='src/assets/assets/images/2d.png'
              className=' rounded-3'
            />
            <Card.Body>
              <Card.Title className='text-secondary fs-6'>
                Stephan Moccio: The Zane Lowe Interview
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className=' d-none d-lg-block'>
          <Card className='bg-black text-light border-0'>
            <Card.Img
              variant='top'
              src='src/assets/assets/images/2f.png'
              className=' rounded-3'
            />
            <Card.Body>
              <Card.Title className='text-secondary fs-6'>
                Stephan Moccio: The Zane Lowe Interview
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MainNewRadio
