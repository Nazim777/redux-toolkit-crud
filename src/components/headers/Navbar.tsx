import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router';


function NavScrollExample() {
  const navigate = useNavigate()
  return (
    <Navbar expand="lg" >
      <Container fluid>
        <Navbar.Brand style={{cursor:'pointer'}} onClick={()=>navigate('/')}>Redux-Toolkit-Crud</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/users'>Users</Link>
            <Link className='link' to='/user-create'>Create-User</Link>
            <Link className='link' to='/default-user'>Default-User</Link>
            <Link className='link' to='/todos'>Todos</Link>

           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;