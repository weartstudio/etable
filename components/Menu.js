import { Navbar, Button, Nav, Container } from 'react-bootstrap'

export default function Menu() {
	return(
    <Navbar sticky="top" bg="light">
      <Container fluid>
        <Navbar.Brand href="/">eTable</Navbar.Brand>
        <Button href="/uj-foglalas" variant="primary">
          <i className="bi bi-plus-circle me-2"></i> 
          Új foglalás
        </Button>
      </Container>
    </Navbar>
	)
}
