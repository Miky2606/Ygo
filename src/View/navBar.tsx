import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBarWeb(): JSX.Element {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <Nav.Link href="/cardset">Products</Nav.Link>
            
        
          </Nav>
        </Navbar.Collapse>
       <div className="redes" 
        >
       <a href="/hh">Instagram</a>
        <a href="/ss">Instagram</a>
        <a href="/sss">Instagram</a>
       </div>
        
      </Container>
    </Navbar>
  );
}

export default NavBarWeb;