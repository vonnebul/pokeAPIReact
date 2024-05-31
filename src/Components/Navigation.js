import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import pokemon from '../img/logo.png'
import '../style/navigation.css'

function Navigation() {
    return (
      <>
        <Navbar className="red" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={pokemon} height="100"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link className='white'><span className="white">Liste Pokémons</span></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/MonPokedex">
                <Nav.Link className="white"><span className="white">Mon pokédex</span></Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
      </>
    );
  }
  
  export default Navigation;