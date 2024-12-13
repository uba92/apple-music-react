import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CustomCard from './CustomCard'

const MainNewReleases2 = () => {
  const BASE_URL =
    ' https://striveschool-api.herokuapp.com/api/deezer/search?q=queen'

  const [songs, setSongs] = useState([])

  const getData = async () => {
    try {
      const response = await fetch(BASE_URL)
      if (response.ok) {
        const data = await response.json()
        console.log('Dati dalla fetch', data)
        setSongs(data.data)
      } else {
        throw new Error('Errore nella richiesta')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (songs.length !== 0) {
    console.log('Dati salvati nello state: ', songs)
  }
  return (
    <Container className=' d-none d-lg-block'>
      <Row>
        <h5>
          Nuove uscite <i className='bi bi-chevron-right'></i>
        </h5>
        {songs.length !== 0 &&
          songs.slice(0, 10).map((song) => {
            return (
              <Col key={song.id} xs={2}>
                <CustomCard song={song} />
              </Col>
            )
          })}
      </Row>
    </Container>
  )
}

export default MainNewReleases2
