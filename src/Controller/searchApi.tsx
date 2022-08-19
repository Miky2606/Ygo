import axios from "axios";
import {cardsArray, repetaData} from "./Data/data";

const  datos = {
    "widget": {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}
}

const searchCard = async() =>{

    const data = []
try{
    
   const response = await axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php")

   data.push(response.data)


   
    return response.data

  } catch (error) {

    console.log(error);
    
    
  }
   

}

export default searchCard