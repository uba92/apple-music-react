import { Col, Container, Row } from 'react-bootstrap'

const MyFooter = () => {
  const getYear = () => {
    const year = new Date().getFullYear()
    return year
  }
  return (
    <Container className=' my-5'>
      <Row>
        <Col xs={1}>
          <p>Italia</p>
        </Col>
        <Col xs={10}>
          <p>| English(UK)</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Copyright &copy; {getYear()} <span>Apple Inc.</span> Tutti i diritti
            riservati.
          </p>
        </Col>
      </Row>

      <Row>
        <Col className=' d-md-flex'>
          <p className='mx-1'>Condizioni dei servizi internet</p>
          <p className='mx-1'>Apple Music e privacy</p>
          <p className='mx-1'>Avviso sui cookie</p>
          <p className='mx-1'>Supporto</p>
          <p className='mx-1'>Feedback</p>
        </Col>
      </Row>
    </Container>
  )
}

export default MyFooter
