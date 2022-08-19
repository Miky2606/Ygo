import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { cardsArray } from '../../Controller/Data/data';
import { CardsApi } from '../../Controller/Data/structApi';

function CardsWeb(props:CardsApi) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
        {props.data.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardsWeb;