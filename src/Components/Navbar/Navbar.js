import React from 'react'
import { Link } from "react-router-dom";
// import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor } from './style.js'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar2 = () => {
  return (

    // <!-- Navbar -->
    // <NavbarSection>

    //   <div className="container">

    //     <Logo>
    //       <LogoText>Ultra Profile</LogoText>
    //     </Logo>
    //     <UlList>
    //       <ListItem><Anchor><Link id="RouterNavLink" to="/">Home</Link></Anchor></ListItem>
    //       <ListItem><Anchor><Link to={'/work'}>Work</Link>                           </Anchor></ListItem>
    //       <ListItem><Anchor><Link to={'/Portfolio'}>Portfolio</Link>                          </Anchor></ListItem>
    //       <ListItem><Anchor><Link to={'/Profile'}>Resume</Link>                       </Anchor></ListItem>
    //       <ListItem><Anchor><Link to={'/About'}>About</Link>                         </Anchor></ListItem>
    //       <ListItem><Anchor><Link to="/contact" style={null}>Contact</Link>                    </Anchor></ListItem>
    //     </UlList>
    //   </div>
    // </NavbarSection>
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Link to="/" className='navbar-brand '> Ultra Profile</Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to={'/work'}>Work</Link>
              <Link className='nav-link' to={'/Portfolio'}>Portfolio</Link>
              <Link className='nav-link' to={'/Profile'}>Resume</Link>
              <Link className='nav-link' to={'/About'}>About</Link>
              <Link className='nav-link' to="/contact" style={null}>Contact</Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>


  )

}

export default Navbar2