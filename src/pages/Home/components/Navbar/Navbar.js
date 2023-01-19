import React from 'react'
import { NavContainer, NavLink, NavIcon, NavTitle } from '../../style'

const Navbar = () => {
  return (
      <NavContainer>
        <NavLink>
          <NavIcon
            href='#accueil'
          ></NavIcon>
          <NavTitle>Accueil</NavTitle>
        </NavLink>
        <NavLink>
          <NavIcon
            href='#umdp'
          ></NavIcon>
          <NavTitle>UMDP</NavTitle>
        </NavLink>

        <NavLink>
          <NavIcon
            href='#services'
          ></NavIcon>
          <NavTitle>Services</NavTitle>
        </NavLink>

        <NavLink>
          <NavIcon
            
          ></NavIcon>
          <NavTitle>Store</NavTitle>
        </NavLink>

        <NavLink>
          <NavIcon
            href='#contact'
          ></NavIcon>
          <NavTitle>Contact</NavTitle>
        </NavLink>
      </NavContainer>
  )
}

export default Navbar
