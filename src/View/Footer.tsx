import {Navbar,Container} from "react-bootstrap"

const Footer  = ():JSX.Element =>{
    return(
        <div>
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <h4>Instagram</h4>
     
          </Navbar.Brand>

          <Navbar.Brand href="https://bobbyhadz.com/blog/react-router-not-found-page" target="blank">
          <h4>Discord</h4>
     
          </Navbar.Brand>

          <Navbar.Brand href="#home">
          <h4>Youtube</h4>
     
          </Navbar.Brand>
        </Container>
      </Navbar>

      </div>
    )
}

export default Footer