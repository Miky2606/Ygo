import {
  Modal,
  Container,
  Row,
 Tabs,
 Tab,
  Col,

  ListGroup
} from "react-bootstrap";
import { banlist_info, CardsApi } from "../../Controller/Data/structApi";
import { CardStore } from "../../Controller/Data/data";
import ModalDescription from "./modalDescription";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./loading";


const ModalBodyCustom = (props: CardsApi) => {

   const [cardsStoreTCG, setCardsStoreTCG] = useState<CardStore[]>([])
   const [cardsStoreTroll, setCardsStoreTroll] = useState<CardStore[]>([])
   const [load, setLoad] = useState<Boolean>(true)
   const [error, setError] = useState<String>("")
   const [banlist, setBanlist] = useState<banlist_info>()

const loadCardsStore = ()=>{
  axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&name="+ props.name)
      .then((response) => {
        setBanlist(response.data.data[0].banlist_info);
        console.log(response.data.data[0].banlist_info);
        
       
      
      })
      axios.get("http://localhost:4000/api/cards/"+ props.name.toLowerCase())
      .then((response)=>{
       
        setCardsStoreTCG(response.data.tcg)
        setCardsStoreTroll(response.data.troll)
        setLoad(false)
   
        
      })
      .catch((error)=>{
       setError(error)
       setLoad(false)

      })
}

useEffect(()=>{
  loadCardsStore()
}, [])

  return (
    <div style={{ overflowY: "scroll" }}>
      <Container>
        <Row>
          <Col></Col>
          <Modal.Header closeButton>
            <Modal.Title>{props.name}  ({props.type}) <span style={{color:'red'}}>{banlist?.ban_tcg}</span></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container >
              <Row >
                <Col sm={12} md={6} xs={12}>
                  <img  src={props.card_images[0].image_url_small} alt={props.name}/>
                  <br/>
                </Col>

                <Col>
                <ModalDescription {...props}/>
                </Col>

              </Row>
            </Container>
          </Modal.Body>
               {load ? <Loading /> :

               error !== "" ? <p>Error in the Network</p> :

<Tabs
defaultActiveKey="tcg"
id="uncontrolled-tab-example"
className="mb-3"
>
<Tab eventKey="tcg" title="TCG">
     
{cardsStoreTCG.map((tcg)=>{
 
      return  tcg.price.map((e, index)=>{
          return(
                
            <ListGroup title="TCG">
                <ListGroup.Item> Price: {e}  <br /> Condition: {tcg.condition[index]}</ListGroup.Item>

            </ListGroup>

          )

        })
              
                })
              }
</Tab>
<Tab eventKey="troll" title="Troll">

{cardsStoreTroll.map((troll)=>{
 
 return troll.price.map((e, index)=>{
       
    
        return(
          index < troll.price.length -1   ?
        
       <ListGroup title="Troll">
           <ListGroup.Item> Price: {troll.price[index+1]}  <br /> Condition: {troll.condition[index]}</ListGroup.Item>

       </ListGroup>
    
    : <span></span>
        )
 

   })
 
         
           })
         }
</Tab>

</Tabs>
            

                
               }

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default ModalBodyCustom;
