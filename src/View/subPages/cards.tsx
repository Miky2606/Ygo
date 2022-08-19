import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { cardsArray } from '../../Controller/Data/data';

function CardsWeb(props:cardsArray) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.widget.text.name}</Card.Title>
        <Card.Text>
        {props.widget.text.alignment}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardsWeb;