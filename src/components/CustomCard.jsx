/* eslint-disable react/prop-types */

import { Card } from 'react-bootstrap'
const CustomCard = (props) => {
  return (
    <Card className=' border-0'>
      <Card.Img
        variant='top'
        src={props.song.album.cover}
        className=' rounded-3'
      />
      <Card.Body>
        <Card.Title>{props.song.title_short}</Card.Title>
      </Card.Body>
    </Card>
  )
}
export default CustomCard
