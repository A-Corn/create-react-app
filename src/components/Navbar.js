import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LinkContainer from 'react-router-bootstrap';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
  <Navbar.Brand>CodeWithVincent</Navbar.Brand>
  </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <LinkContainer to="/about">
    			<Nav.Link>About</Nav.Link>
      		</LinkContainer>
            <NavDropdown title="Hackathon" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Info</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Rules
              </NavDropdown.Item>
				<NavDropdown.Item href="#action/3.3">
                FAQ
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Submit Project</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Join Discord
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;