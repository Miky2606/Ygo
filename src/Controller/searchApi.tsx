import axios from "axios";
import { CardsApi } from "./Data/structApi";

const searchCard = async() =>{

    const data: CardsApi[] = []
try{
    
   const response = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")



   
    return  response.data.data
  } catch (error) {

    console.log(error);
    
    
  }
   

}

export default searchCard