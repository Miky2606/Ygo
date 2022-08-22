import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { CardsApi } from '../../Controller/Data/structApi';

function CardsWeb(props:CardsApi):JSX.Element {

  const [length,setLength] = useState<number>(40);
 

  const reduceText = (text:string, length: number) =>{
     
    if(text.length > length){
       return   text.substring(0,length)+ "..."  
    }
    return text
    
  }

  const changeLenght = (length: number)=>{
   
   setLength(length)


  }

  return (
    <Card id="cards-style" style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {props.card_images[0].image_url} />
      <Card.Body>
        <Card.Title style={{ fontSize: '1rem' }}>{props.name}</Card.Title>
        <Card.Text>
        {reduceText(props.desc, length)}

        {length == 40 ?  <Button variant="light" size='sm' onClick={() => changeLenght(props.desc.length)}>Show More</Button> :  <Button variant="light" size='sm' onClick={() => changeLenght(40)}>Show Less</Button>}
     
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardsWeb;