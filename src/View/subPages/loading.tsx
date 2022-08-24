import { Spinner } from "react-bootstrap"

const Loading = ():JSX.Element =>{
    return (
        <div className="loading">
         
        <Spinner animation="border" role="status">
           <span className="visually-hidden">Loading...</span>
         </Spinner>
           
         </div>

    )
}

export default Loading