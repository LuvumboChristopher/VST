import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FaAngleUp } from 'react-icons/fa'
import { MenuAlt1 } from '@styled-icons/heroicons-outline'
import AccueilFond from '../../assets/img/accueil_fond.png'
import ServicesFond from '../../assets/img/services_fond.jpg'
import ContactImage1 from '../../assets/img/contact_img_1.jpg'
import ContactImage2 from '../../assets/img/contact_img_2.jpg'
import Umdp from '../../assets/img/umdp.jpg'

/*------------------------------------------------------------Top-Button------------------------------------------------------------*/

const Icon = ({ className, children }) => (
  <FaAngleUp className={className}>{children}</FaAngleUp>
)
export const TopButtonContainer = styled.div`
  position: relative;
`
export const TopButtonIcon = styled(Icon)`
  z-index: 99;
  position: fixed;
  bottom: 40px;
  right: 20px;
  background-color: #000000;
  border: 1px solid #fff;
  height: 40px;
  width: 40px;
  padding: 0.45rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s linear;
  &:hover {
    background: rgba(255, 255, 255, 0.89);
    color: #000000;
    border: 1px solid #000000;
  }
`

/*------------------------------------------------------------Navigation------------------------------------------------------------*/

const FadeNavIn = keyframes`
  to {
    transform: translateY(-50%) translateX(0);
    opacity: 1;
  }
`
export const NavContainer = styled.div`
  z-index: 100;
  position: fixed;
  left: 3px;
  top: 50%;
  transform: translateY(-50%) translateX(-100px);
  background: none;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  opacity: 0;
  animation: ${FadeNavIn} 1s ease 1 1s forwards;
  @media (max-width: 821px) {
    display: none;
  }
`
export const NavLink = styled.div`
  width: 100%;
  height: 14px;
  display: flex;
  align-items: center;
  gap: 14px;
`
export const NavIcon = styled.a`
  width: 13px;
  height: 13px;
  background-color: rgba(0, 0, 0, 0.305);
  border-radius: 50%;
  border: 1px solid white;
  cursor: pointer;
  &:hover {
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(0, 0, 0);
  }
`
export const NavTitle = styled.p`
  display: none;
  font-size: 0.93rem;
  color: rgb(255, 255, 255);
  text-shadow: 0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000;
  ${NavLink}:hover & {
    display: block;
  }
`

/*------------------------------------------------------------ResponsiveNavbar------------------------------------------------------------*/

export const ResponsiveNavbar = styled.div`
  display: none;
  @media (max-width: 821px) {
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: auto;
    background: ${(props) =>
      props.navbarTransparency ? 'transparent' : 'white'};
    border-bottom: ${(props) =>
      props.navbarTransparency ? 'none' : '4px solid black'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s linear;
  }
`

export const ResponsiveNavContainer = styled.div`
  width: 95%;
  margin: 1.5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export const HeaderImage = styled.img`
  width: 140px;
  margin: 0;
  transition: all 0.1s linear;
`
export const MenuIcon = styled(MenuAlt1)`
  width: 2.5rem;
  margin: 0;
  color: ${(props) => (props.navbarTransparency ? 'white' : 'black')};
  cursor: pointer;
`
export const ResponsiveNavbarContent = styled.div`
  display: none;
  @media (max-width: 821px) {
    display: block;
    z-index: 100;
    position: fixed;
    top: 0;
    right: ${(props) => (props.showNavbarMenu ? '0' : '-150%')};
    width: 63%;
    height: 100vh;
    margin: auto;
    padding: 1.5rem;
    background-color: rgba(0, 0, 0, 0.96);
    transition: all 0.35s ease-out;
  }
`

/*------------------------------------------------------------Global------------------------------------------------------------*/

export const SectionTitle = styled.h1`
  font-family: var(--font-family-title);
  font-size: clamp(1.5rem, 2.35vw, 55px);
  width: 100%;
  margin: auto;
  text-transform: none;
`
/*------------------------------------------------------------Accueil------------------------------------------------------------*/

export const AccueilSection = styled.div`
  background: url(${AccueilFond});
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
`
export const VsLogo = styled.img`
  display: block;
  width: clamp(250px, 15vw, 1400px);
`

/*------------------------------------------------------------UMDP------------------------------------------------------------*/

export const UmdpSection = styled.div`
  width: 100%;
  height: fit-content;
  margin: auto;
  display: flex;
  flex-direction: row;
  @media (min-width: 425px) and (max-width: 1260px) {
    flex-direction: column;
  }
  @media (max-width: 425px) {
    display: block;
  }
`
export const UmdpImgContainer = styled.div`
    width: 50%;
    margin: 6rem 0 6rem 4rem;
    background: url(${Umdp});
    background-size: cover;
    background-position: 45% 45%;
  @media (max-width: 1260px) {
    width: 85%;
    height: 220px;
    margin: 4rem auto 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 170px;
    background-size: 150% auto;
    background-position: 45% 45%;
  }
`
export const UmdpTextContent = styled.div`
  width: 93%;
  margin: 2.5rem auto;
`

export const UmdpTextContainer = styled.div`
  width: 100%;
  margin: 15vh auto;
  display: grid;
  place-items: center;
  @media (max-width: 1260px){
    height: auto;
    margin: 1rem auto 5rem;
  }
  
`

export const UmdpTitle = styled.h1`
  font-family: var(--font-family-title);
  font-size: clamp(1.5rem, 2.35vw, 55px);
  width: 100%;
  margin: 0 auto;
  text-transform: none;
`

export const UmdpParagrph = styled.p`
  width: 100%;
  margin: 20px auto;
  text-align: justify;
`
export const UmdpSignature = styled.p`
  width: 95%;
  margin-top: 2rem;
  text-align: end;
  font-size: 2rem;
  font-family: var(--font-family-signature);
`

/*------------------------------------------------------------Services------------------------------------------------------------*/

export const ServicesSection = styled.div`
  width: 100%;
  margin: auto;
  padding: 2rem 0;
  background: url(${ServicesFond});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const ServicestHeader = styled.header`
  width: 92%;
  margin: 1rem auto 0.5rem;
  color: white;
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
    margin: auto;
    padding: 0;
  }
`

export const ServicesTitle = styled.h1`
  font-family: var(--font-family-title);
  font-size: clamp(1.75rem, 2.35vw, 55px);
  width: 100%;
  margin:auto;
  text-transform: none;
  @media (max-width: 768px) {
    margin: auto;
  }
`

export const ServicesSubtitle = styled.p`
  width: 100%
  margin: auto;
  font-size: 0.45rem;
  text-transform: uppercase;
  letter-spacing: 5px;
`
export const ServicesContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
`
export const ContentContainer = styled.div`
  width: 95%;
  margin: 0.5rem auto 2rem;
  display: flex;
  justify-content: center;
  gap: 2vw;
  @media (max-width: 1400px) {
    width: 93%;
    margin: auto;
    flex-direction: column;
    gap: 5vh;
  }
`
export const Card = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: rgba(200, 200, 200, 0.055);
  box-shadow: 2px 3px 23px -3px rgba(0, 0, 0, 0.25);
  transition: 0.3s ease;
  @media (max-width: 1400px) {
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  }
  @media (max-width: 720px) {
    width: 100%;
    flex-direction: column;
    height: auto;
    background: none;
    box-shadow: none;
  }
`
export const CardImageContainer = styled.div`
  @media (max-width: 1400px) {
    position: relative;
    width: 100%;
    margin: auto;
    height: 210px;
  }
  @media (max-width: 720px) {
    width: 100%;
    height: 400px;
  }
`
export const CardImage = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1400px) {
    width: 100%;
    height: 210px;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    object-fit: cover;
  }
  @media (max-width: 720px) {
    width: 100%;
    height: 400px;
  }
`
export const CardTextContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
  color: white;
  display: grid;
  place-items: center;
  @media (max-width: 1400px) {
    width: 100%;
    margin: auto 1.5rem;
  }
  @media (max-width: 720px) {
    width: 100%;
    margin: 1rem auto;
    padding: 0;
  }
`
export const CardTitle = styled.p`
  width: 100%;
  font-size: 1.20rem;
  font-weight: bold;
  margin: 0 auto 1rem;
  text-align: left;
`
export const CardText = styled.p`
  font-size: 0.9rem;
  margin: auto;
  text-align: justify;
`

/*------------------------------------------------------------Banner------------------------------------------------------------*/

export const BannerContainer = styled.div`
  width: 100%;
  margin-top: -1px;
  height: 280px;
  position: relative;
`
export const BannerVideo = styled.video`
  width: 100%;
  height: 280px;
  object-fit: cover;
`
export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 280px;
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  background-color: rgba(3, 2, 2, 0.81);
`
export const CitacionContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 280px;
  display: grid;
  place-items: center;
`
export const Citacion = styled.p`
  width: 90%;
  margin: auto;
  display: block;
  color: white;
  padding: 0.73rem;
  text-align: center;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  @media (min-width: 1440px) {
    width: 50%;
    font-size: 0.8rem;
  }
`

/*------------------------------------------------------------Contact------------------------------------------------------------*/

export const ContactContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  color: white;
  font-family: var(--font-family-text);
  text-transform: uppercase;
  @media (min-width: 1440px) {
    display: flex;
  }
`
export const ContactLeft = styled.div`
  width: 100%;
  margin: auto;
  padding: 2rem 0;
  height: auto;
  display: grid;
  place-items: center;
  background: url(${ContactImage1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1439px) {
    width: 65%;
    height: 100vh;
  }
  @media screen and (min-width: 1440px) and (max-height: 850px) {
    height: 850px;
  }
`
export const ContactRight = styled.div`
  width: 100%;
  height: auto;
  border: none;
  display: grid;
  place-items: center;
  border-top: 5px solid white;
  background: url(${ContactImage2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 1439px) {
    width: 35%;
    height: 100vh;
    border: none;
    border-left: 5px solid white;
  }
  @media screen and (min-width: 1440px) and (max-height: 850px) {
    height: 850px;
  }
`
export const ContactSection = styled.div`
  @media (min-width: 821px) {
    margin: auto;
    display: flex;
    gap: 3rem;
    justify-content: space-around;
  }
  @media (min-width: 1440px) {
    display: block;
    margin: auto;
    align-items: flex-start;
  }
`
export const SectionContainer = styled.div`
  width: 92%;
  margin: auto;
  @media (min-width: 1440px) {
    width: ${(props) => (props.formSection ? '80%' : '85%')};
  }
`
export const ContactHeader = styled.header`
  margin: auto;
`
export const ContactTitle = styled.h1`
  font-family: var(--font-family-title);
  font-size: clamp(1.75rem, 2.35vw, 55px);
  width: 100%;
  margin: auto;
  text-transform: none;
`
export const ContactSubtitle = styled.p`
  margin: 0;
  font-size: 0.47rem;
  text-transform: uppercase;
  letter-spacing: 5px;
`
export const ContactForm = styled.form`
  width: 100%;
  margin: 1.2rem auto;
  text-align: center;
  @media (min-width: 821px) {
    width: 100%;
    text-align: start;
    flex: 2;
  }
`
export const FooterNav = styled.div`
  @media (min-width: 1440px) {
    align-items: flex-start;
  }
  @media (min-width: 821px) {
    flex: 1;
  }
`
export const ContactInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0 auto 1rem;
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid white;
  color: white;
  resize: none;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    opacity: 0.5;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  ::placeholder {
    font-size: 0.6rem;
    font-family: var(--font-family-text);
    text-transform: uppercase;
    color: white;
    opacity: 1;
  }
`
export const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 0.3rem;
  margin: 0 auto 1rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  border-radius: 0;
  color: white;
  resize: none;
  text-align: justify;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    opacity: 0.5;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  ::placeholder {
    font-size: 0.6rem;
    font-family: var(--font-family-text);
    text-transform: uppercase;
    color: white;
    opacity: 1;
  }
  ::-webkit-scrollbar {
    width: 7px;
    margin: 0.3rem auto;
  }
  ::-webkit-scrollbar {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
`
export const ContactButton = styled.button`
  width: fit-content;
  margin: 1rem auto;
  padding: 0.5rem 2rem;
  background: transparent;
  border: 1px solid wheat;
  font-size: 0.8rem;
  font-family: var(--font-family-text);
  text-transform: uppercase;
  color: white;
  opacity: 1;
  transition: all 0.3s linear;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: rgba(255, 255, 255, 0.801);
    transition: all 0.1s linear;
  }
`
export const FooterInfo = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem auto;
  }
`
export const FooterContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
`
export const PlanDuSite = styled.div`
  @media (min-width: 1440px) {
    width: 100%;
    margin-left: 5rem;
  }
`
export const PlanDuSiteContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: left;
  @media (min-width: 768px) {
    list-style: none;
    display: block;
    justify-content: left;
  }
`
export const PlanDuSiteContent = styled.li`
  margin-right: 0.8rem;
  font-size: 0.8rem;
  text-transform: capitalize;
`
export const Copyright = styled.p`
  width: 100%;
  margin: 1rem auto 0;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
`
export const NewsletterContainer = styled.div`
  width: 100%;
  margin: 4rem auto;
  @media (min-width: 1440px) {
    width: 85%;
    margin: auto;
  }
`
export const LoremTitle = styled.h3`
  margin: 0 auto 1rem;
  font-size: 0.79rem;
  letter-spacing: 5px;
`
export const LoremText = styled.p`
  width: 100%;
  margin: auto;
  font-size: 0.8rem;
  text-align: justify;
  text-transform: lowercase;
  &:first-letter {
      text-transform: uppercase;
    }
`
export const NewsletterInput = styled.input`
  width: 100%;
  color: white;
  border: 1px solid white;
  border-radius: 0;
  background: transparent;
  padding: 0.75rem;
  margin: 1.3rem auto;
  &:focus {
    outline: 1px solid rgb(255, 255, 255);
  }
  ::placeholder {
    font-size: 0.6rem;
    font-family: var(--font-family-text);
    text-transform: uppercase;
    color: white;
    opacity: 1;
  }
`
export const NewsletterButton = styled.button`
  width: fit-content;
  margin: auto;
  padding: 0.75rem 2rem;
  background: black;
  border: none;
  font-size: 0.8rem;
  font-family: var(--font-family-text);
  text-transform: uppercase;
  color: white;
  opacity: 1;
  transition: all 0.3s linear;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: rgba(255, 255, 255, 0.801);
  }
`
