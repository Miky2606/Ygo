import { useState } from "react";
import {Button, Card, Modal, ModalBody} from "react-bootstrap";


import { CardsApi } from "../../Controller/Data/structApi";
import ModalBodyCustom from "./modal";

function CardsWeb(props: CardsApi): JSX.Element {
  const [length, setLength] = useState<number>(40);
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)


  const reduceText = (text: string, length: number) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };

  const changeLenght = (length: number) => {
    setLength(length);
  };

  return (
    <div>

    <Card id="cards-style" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.card_images[0].image_url} />
      <Card.Body>
        <Card.Title style={{ fontSize: "1rem" }}>{props.name}</Card.Title>
        <Card.Text>
          {reduceText(props.desc, length)}

          {length === 40 ? (
            <Button
              variant="light"
              size="sm"
              onClick={() => changeLenght(props.desc.length)}
            >
              Show More
            </Button>
          ) : (
            <Button variant="light" size="sm" onClick={() => changeLenght(40)}>
              Show Less
            </Button>
          )}
        </Card.Text>
      
        <Button variant="danger" onClick={handleShow}>See Card</Button>
      </Card.Body>
    </Card>


<Modal show={show} fullscreen = {true} onHide={handleClose} animation={true}>
   <ModalBodyCustom   { ...props } />
</Modal>


</div>
  );
}

export default CardsWeb;
