import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBarWeb(): JSX.Element {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Cards</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <Nav.Link href="#l">Staples</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
       <div className="redes" 
        >
       <a href="">Instagram</a>
        <a href="">Instagram</a>
        <a href="">Instagram</a>
       </div>
        
      </Container>
    </Navbar>
  );
}

export default NavBarWeb;