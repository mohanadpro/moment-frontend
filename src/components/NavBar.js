import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/logo.png'
import style from '../styles/Navbar.module.css'
import { NavLink } from 'react-router-dom';
export const NavBar = () => {
  return (      
  <Navbar expand="lg" className={style.NavBar} fixed='top'>
    <Container>
        <Navbar.Brand>
            <img src={logo} alt='logo' height='45'/>
        </Navbar.Brand>
      <Nav className="ml-auto text-left">
        <NavLink to="/signin" className={style.NavLink}><i className='fas fa-sign-in-alt'></i>
        Sign in</NavLink>
        <NavLink to='/signup'  className={style.NavLink}><i className='fas fa-user-plus'></i>
        Sign up</NavLink>
      </Nav>
    </Container>
  </Navbar>
  )
}
