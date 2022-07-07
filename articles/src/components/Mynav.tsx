import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Mynav = ()=>{
    return(
        <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{color:"#ffff"}}>Spaceflight News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="btn" style={{color:"#ffff"}}>Home</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Mynav