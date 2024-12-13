import { Col, Container, Row, Card } from 'react-bootstrap'

const MainNews = () => {
  return (
    <Container className=' mt-3'>
      <Row>
        <h1>Novità</h1>
        <hr />
        <Col xs={6}>
          <Card className=' h-100 border-0'>
            <Card.Body style={{ height: '40%' }}>
              <Card.Text>
                <h5>NUOVA STAZIONE RADIO</h5>
                <p>
                  Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Img variant='top' src='src/assets/assets/images/1a.png' />
          </Card>
        </Col>
        <Col xs={6}>
          <Card className=' h-100 border-0'>
            <Card.Body style={{ height: '40%' }}>
              <Card.Text>
                <h5>NUOVA STAZIONE RADIO</h5>
                <p>Ecco la nuova casa della musica latina</p>
              </Card.Text>
            </Card.Body>
            <Card.Img variant='top' src='src/assets/assets/images/1b.png' />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default MainNews
