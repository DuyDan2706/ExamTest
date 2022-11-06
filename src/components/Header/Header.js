import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
const Header = ()=> {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">Duy Đan</Navbar.Brand> */}
        <NavLink  to='/' className='navbar-brand' >Duy Đan</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <NavLink  to='/' className='nav-link ' > Home</NavLink>
            <NavLink  to='/user' className='nav-link'> Users</NavLink>
            <NavLink  to='/Admin' className='nav-link'> Admin</NavLink>
           
   
         
          </Nav>
          <nav>
            <button className='btn-login'>Log in</button>
            <button className='btn-signup'>sign up</button>
          {/* <NavDropdown title="settings" id="basic-nav-dropdown">
              <NavDropdown.Item>Login </NavDropdown.Item>
              <NavDropdown.Item >  Logout</NavDropdown.Item>
              <NavDropdown.Item >profile </NavDropdown.Item>
            </NavDropdown> */}
          </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;