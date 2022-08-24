import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Col, Row,Card, Alert } from "react-bootstrap"
import { CardSet } from "../Controller/Data/data"
import Loading from "./subPages/loading"


const CardSetView =():JSX.Element =>{

    const [set, setCardSet] = useState<CardSet[]>()
    const [load, setLoad] = useState<Boolean>(true)
    const [error, setError] = useState<string>("")


    const cardSetLoad = ()=>{
axios.get("https://db.ygoprodeck.com/api/v7/cardsets.php")
.then((response)=>{
    setCardSet(response.data)
    setLoad(false)
})
.catch((error) => setError(error))
    }
    useEffect(()=>{
        cardSetLoad()
    })

return(
        <Container>
              <Row>
                
                {
                    //loading
                    load ?
                    <Loading/>
                    :
                    
                    //error
                    error !== "" ? <Alert variant="danger">Error Network</Alert> :
                    
                    set?.map((e)=>{
                        return(
                            <Col xs={12} lg={4} md={6}>
                           <Card style={{ width: '18rem', margin:'20px' }}>
      <Card.Body>
        <Card.Title>{e.set_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Code: {e.set_code}</Card.Subtitle>
        <Card.Text>
          Date: {e.tcg_date}
          <br/>
          Number of Cards: {e.num_of_cards}
        </Card.Text>
        <Card.Link href={"/cardset/"+e.set_name}>Card Link</Card.Link>
        
      </Card.Body>
    </Card>
                            </Col>
                        )
                    })
                    
                   
                  
               
                }

               
              </Row>


        </Container>
)
}
export default CardSetView