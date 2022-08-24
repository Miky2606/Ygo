import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { CardsApi } from "../../Controller/Data/structApi";

const ModalDescription = (props:CardsApi): JSX.Element => {
    
return (
   
    <Container>
        <Row>

           
           <Col>
       

   
           <ListGroup>
           {      props.type.includes("Monster") ?
           <div>
            
            <ListGroup.Item>{props.atk  ? <p>Atk: {props.atk}</p>:<span></span>}</ListGroup.Item>
            {props.def   ? <ListGroup.Item> <p>Def: {props.def}</p></ListGroup.Item>:<span></span>}
            {props.level ? <ListGroup.Item><p>Level/Rank: {props.level}</p></ListGroup.Item>:<span></span>}
            {props.linkval ? <ListGroup.Item><p>Link: {props.linkval}</p></ListGroup.Item>:<span></span>}
            {props.linkmarkers ? <ListGroup.Item><p>Markers: {props.linkmarkers.map((e) => <span style={{padding:'2px'}}>{e}</span>)}</p></ListGroup.Item>:<span></span>}
            {props.race ? <ListGroup.Item><p>Type: {props.race}</p></ListGroup.Item>:<span></span>}
           
            <ListGroup.Item>{props.attribute  ? <p>Attribute: {props.attribute}</p>:<span></span>}</ListGroup.Item>
            </div> 
            : <span></span>

                 } 
        {props.archetype ? <ListGroup.Item><p>Archetype: {props.archetype}</p></ListGroup.Item>:<span></span>}
            <ListGroup.Item>Description: {props.desc}</ListGroup.Item>
         

           </ListGroup>
    
 
</Col>




        </Row>
    </Container>


)

}

export default ModalDescription