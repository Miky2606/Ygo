import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import {useParams } from "react-router-dom";
import { CardsApi } from "../Controller/Data/structApi";
import CardsWeb from "./subPages/cards";
import Loading from "./subPages/loading";

const SetCardsShow = () =>{
    const { id } = useParams()
   
    const [cards, setCards] =  useState<CardsApi[]>([])
    const [load,setLoad] = useState<Boolean>(false)
    const [error, setError] = useState<string>("")
    
    
    const loadCard = () =>{
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=​"+ id?.replace("&", ""))
        .then((response) =>{
            setLoad(false)
           setCards(response.data.data)
        })
        .catch((error)=> setError(error))
    }

    useEffect(()=>{
        loadCard()
    },[])

     return(
        <div>
         {
            load ? <Loading/> :
            error !== "" ? <Alert variant="danger"> Error in the Network</Alert> :
            <Container>
                <Row>
                    {cards.map((e)=>{
                        return (
                            <Col xs={12} lg={4} md={6}>
                                <CardsWeb {...e} />
                            </Col>
                            
                        )
                    })}
                   
                </Row>
            </Container> 
         }
        </div>

     )

}


export default SetCardsShow