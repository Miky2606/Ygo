import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaYoutube, FaTwitch } from 'react-icons/fa';

function NavBarWeb(): JSX.Element {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Cards</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <Nav.Link href="/cardset" >Products</Nav.Link>
           <Nav.Link href='https://www.twitch.tv/mikyj2606' style={{color:'purple'}}><FaTwitch /></Nav.Link>
           
           <Nav.Link href="https://www.youtube.com/results?search_query=miky26" target={'_blank'} style={{color:'red'}}><FaYoutube/></Nav.Link>
          
        
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}

export default NavBarWeb;