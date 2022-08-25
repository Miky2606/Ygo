import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Col,Form, Row,Card, Alert } from "react-bootstrap"
import { CardSet } from "../Controller/Data/data"
import Loading from "./subPages/loading"


const CardSetView =():JSX.Element =>{

    const [set, setCardSet] = useState<CardSet[]>()
    const [load, setLoad] = useState<Boolean>(true)
    const [error, setError] = useState<string>("")
    const [filter, setFilter] = useState<CardSet[]>();
    const [cardSearch, setCard] = useState("");

  const handleSubmit = (e:any) => e.preventDefault();
    const handleChange =  (e:any) => {
      setCard(e.target.value)
       
      try {
        const filter = set?.filter((el)=>{
       
          if(e.target.value === ""){
            return set
          }else{
            const regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
              
          
            return el.set_name.toLowerCase().replace(regex,' ').includes(e.target.value.toLowerCase())
          }
        })
  
        setFilter(filter)
           console.log(filter);
           
        
      } catch (error) {
        console.log(error);
        
      }
  
  
    }


    const cardSetLoad = ()=>{
axios.get("https://db.ygoprodeck.com/api/v7/cardsets.php")
.then((response)=>{
    setCardSet(response.data)
    setFilter(response.data)
    setLoad(false)
})
.catch((error) => setError(error))
    }
    useEffect(()=>{
        cardSetLoad()
    },[])

return(

      <div>

<Form onSubmit={handleSubmit}   className="loading" style={{padding:'20px'}}>
      <Form.Group className="mb-3" >
  
        <Form.Control value ={cardSearch} onChange={handleChange} type="text" placeholder="Search...." />
    
      </Form.Group>
      </Form>

   
        <Container>
              <Row>
                
                {
                    //loading
                    load ?
                    <Loading/>
                    :
                    
                    //error
                    error !== "" ? <Alert variant="danger">Error Network</Alert> :
                     filter?.length === 0 ? <Alert variant="danger">No Set</Alert> :
                    filter?.map((e)=>{
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
        <Card.Link href={"/cardset/"+e.set_name} style={{color:"red"}}>See Product</Card.Link>
        
      </Card.Body>
    </Card>
                            </Col>
                        )
                    })
                    
                   
                  
               
                }

               
              </Row>


        </Container>

        </div>
)
}
export default CardSetView