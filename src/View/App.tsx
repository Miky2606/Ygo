
import { useEffect, useState } from "react"
import { cardsArray } from "../Controller/Data/data"
import searchCard from "../Controller/searchApi"
import {Container,Col,Row} from "react-bootstrap"
import CardsWeb from "./subPages/cards"

const App = ():JSX.Element =>{

    const [cards,setCards]=  useState<cardsArray[]>()

const loadData = async()=>{
  
    const datos = await searchCard()
 

    setCards(datos)
    

    
 
}


    useEffect(()=>{
        loadData()
 
    },[])

    return (
      
        <div id="content">
         <Container>
         <Row>
       
        {cards !== [] ? 
         
       cards?.map((e)=>{

       

        return (
         
         
              <Col xs={4}> <CardsWeb {...e} /></Col>
           
           
          


               
        )

       })


: <div>Vacio</div>
    
    }
            </Row>
        
          </Container>
        </div>

    )
}


export default App