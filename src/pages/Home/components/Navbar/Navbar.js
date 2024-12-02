import React, { useState } from 'react';
import { NavContainer, NavLink, NavIcon, NavTitle } from '../../style.js';

const Navbar = ({ activeSection }) => {
  const [hovered, setHovered] = useState(null);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (section) => {
    if (section === 'store') {
      window.open('https://vinylstorelyonshop.vercel.app/', '_blank', 'noopener,noreferrer');
    } else {
      handleScrollToSection(section);
    }
  };

  return (
    <NavContainer>
      {['accueil', 'umdp', 'services', 'faq', 'store', 'contact'].map(section => (
        <NavLink
          key={section}
          onMouseEnter={() => setHovered(section)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handleClick(section)}
        >
          <NavIcon
            className={activeSection === section ? 'active' : ''}
            hovered={hovered === section}
            active={activeSection === section}
          />
          <NavTitle>
            {section === 'accueil' ? 'Accueil' :
            section === 'umdp' ? 'Un mot du proprio' :
            section === 'services' ? 'Services' :
            section === 'faq' ? 'FAQ' :
            section === 'store' ? 'Store' :
            'Contact'}
          </NavTitle>
        </NavLink>
      ))}
    </NavContainer>
  );
};

export default Navbar;
