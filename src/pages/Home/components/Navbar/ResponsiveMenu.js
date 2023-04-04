import React, { useState, useEffect, useRef } from 'react'
import VsLogoBlack from '../../../../assets/img/vs_logo_black.png'
import { IoCloseSharp } from 'react-icons/io5'
import { ResponsiveNavbar, HeaderImage, ResponsiveNavbarContent,  MenuIcon, ResponsiveNavContainer } from '../../style'

const ResponsiveMenu = () => {
  const ref = useRef()
  const [showNavbar, setShowNavbar] = useState(false)
  const [showNavbarMenu, setShowNavbarMenu] = useState(false)
  const [navbarTransparency, setNavbarTransparency] = useState(true)

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (showNavbarMenu && ref.current && !ref.current.contains(e.target)) {
        setShowNavbarMenu(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [showNavbarMenu])

  useEffect(() => {
    setShowNavbar(true)
    window.addEventListener('scroll', () => {
      if (window.scrollY > 516) {
        setNavbarTransparency(false)
      } else {
        setNavbarTransparency(true)
      }
    })
  }, [showNavbar])

  const HandleMenu = () => {
    setShowNavbarMenu(!showNavbarMenu)
  }

  return (
    <>
      <ResponsiveNavbarContent ref={ref} showNavbarMenu={showNavbarMenu}>
        <IoCloseSharp
          style={{
            color: "white",
            fontSize: "2.3rem",
            cursor: "pointer",
            margin: "0",
          }}
          onClick={HandleMenu}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
          }}
        >
          <ul
            style={{
              margin: "5rem auto",
              color: "white",
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: "10px",
              cursor: "pointer",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <li>
              <a href="/#accueil" onClick={() => setShowNavbarMenu(false)}>
                Accueil
              </a>
            </li>
            <li>
              <a href="/#umdp" onClick={() => setShowNavbarMenu(false)}>
                UMDP
              </a>
            </li>
            <li>
              <a href="/#services" onClick={() => setShowNavbarMenu(false)}>
                Services
              </a>
            </li>
            <li>
              <a
                href="https://vinylstorelyonshop.vercel.app/"
                onClick={() => setShowNavbarMenu(false)}
              >
                Store
              </a>
            </li>
            <li>
              <a href="/#contact" onClick={() => setShowNavbarMenu(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </ResponsiveNavbarContent>
      {showNavbar && (
        <ResponsiveNavbar navbarTransparency={navbarTransparency}>
          {!navbarTransparency && (
            <ResponsiveNavContainer>
              <HeaderImage src={VsLogoBlack} className="vs_logo_black" />
              <MenuIcon
                onClick={HandleMenu}
                navbarTransparency={navbarTransparency}
              />
            </ResponsiveNavContainer>
          )}
        </ResponsiveNavbar>
      )}
    </>
  );
}

export default ResponsiveMenu
