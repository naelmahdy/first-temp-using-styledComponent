import React from 'react'
import { Link } from "react-router-dom";
import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor } from './style.js'
const Navbar = () => {
  return (

    // <!-- Navbar -->
    <NavbarSection>

      <div className="container">

        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>




        <UlList>
          <ListItem><Anchor><Link id="RouterNavLink" to="/">Home</Link></Anchor></ListItem>
          <ListItem><Anchor><Link to={'/work'}>Work</Link></Anchor></ListItem>
          <ListItem><Anchor><Link to={'/Portfolio'}>Portfolio</Link></Anchor></ListItem>
          <ListItem><Anchor><Link to={'/Profile'}>Resume</Link></Anchor></ListItem>
          <ListItem><Anchor><Link to={'/About'}>About</Link></Anchor></ListItem>
          <ListItem><Anchor><Link to="/contact" style={null}>Contact</Link> </Anchor></ListItem>
        </UlList>

      </div>

    </NavbarSection>


  )

}

export default Navbar