import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FaAngleUp } from 'react-icons/fa'
import AccueilFond from '../../assets/img/accueil_fond.png'
import ServicesFond from '../../assets/img/services_fond.jpg'
import ContactImage1 from '../../assets/img/contact_img_1.jpg'
import ContactImage2 from '../../assets/img/contact_img_2.jpg'
import Umdp from '../../assets/img/anders_hejlsberg.png'
import UmdpResponsive from '../../assets/img/anders_hejlsber_responsive.webp'

import Faq from '../../assets/img/faq.webp';


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
  bottom: 30px;
  right: 25px;
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
  @media (max-width: 821px) {
    height: 50px;
    width: 50px;
    right: 0;
    border-right: none;


  }
`

/*------------------------------------------------------------Navigation------------------------------------------------------------*/

const FadeNavIn = keyframes`
  to {
    transform: translateY(-50%) translateX(0);
    opacity: 1;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NavContainer = styled.div`
  z-index: 100;
  position: fixed;
  left: 33px;
  top: 50%;
  transform: translateY(-50%) translateX(-100px);
  background: none;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 50px;
  opacity: 0;
  animation: ${FadeNavIn} 1s ease 1 1s forwards;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1280px) {
    display: none;
  }

  &.dark-background {
    background: black;
  }
`;

export const NavIcon = styled.a`
  width: 7px;
  height: 7px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: 
    background-color 0.3s ease-in-out,
    outline 0.3s ease-in-out,
    outline-offset 0.3s ease-in-out; 

  &.active {
    background-color: white;
    outline: 0.5px solid white;
    outline-offset: 13px; 

    &:hover {
      outline: 0.01px solid transparent; 
      outline-offset: 0; 
    }
  }

  &:not(.active) {
    outline: none;
    outline-offset: 0;
  }
`;

export const NavLink = styled.div`
  min-width: 150px;
  height:40px;
  display: flex;
  align-items: center;
  gap: 27px;
  cursor: pointer;

  &:hover {
    ${NavIcon} {
      background-color: white;
    }
     ${NavIcon} &.active {
    background-color: red;
    outline: 0.5px solid white;
    outline-offset: 13px; 

    &:hover {
      outline: 0.01px solid transparent; 
      outline-offset: 0; 
    }
  }

  }
`;

export const NavTitle = styled.p`
  display: none;
  font-size: 0.94rem;
  color: rgb(255, 255, 255);
  text-shadow: 0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  ${NavLink}:hover & {
    display: block;
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeIn} 0.3s ease-in-out forwards;
  }
`;



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
      props.navbarTransparency ? 'none' : '2px solid black'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease-in-out;
  }
`

export const ResponsiveNavContainer = styled.div`
  width: 90%;
  min-height: 80px;
  margin: 1.5rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderImage = styled.img`
  width: 150px;
  margin: 0;
  transition: all 0.3s ease-in-out;
`
export const ResponsiveNavbarContent = styled.div`
  display: none;
  opacity: 0;
  @media (max-width: 821px) {
    display: block;
    z-index: 100;
    position: fixed;
    top: 0;
    right: ${(props) => (props.showNavbarMenu ? '0' : '-150%')};
    width: 100%;
    min-height: 100vh;
    display: flex;
    margin: auto;
    padding: 1.5rem;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.95);
    transition: all 0.35s ease-out;
  }
`

/*------------------------------------------------------------Global------------------------------------------------------------*/

export const SectionTitle = styled.h1`
  font-family: var(--font-family-title);
  font-size: clamp(1.5rem, 2.5vw, 75px);
  width: 100%;
  margin: auto;
  text-transform: none;
`
/*------------------------------------------------------------Accueil------------------------------------------------------------*/

export const AccueilSection = styled.div`
  background: url(${AccueilFond});
  width: 100%;
  margin: -1px auto;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
  position: relative;

  @media (max-width: 425px) {
    width: 100%;
    min-height: auto;
    height: 668px;
  }
     &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0);
        z-index: 1; 
`
export const VsLogo = styled.img`
  display: block;
  width: clamp(200px, 25vw, 300px);
  z-index: 2; 

`

/*------------------------------------------------------------UMDP------------------------------------------------------------*/

export const UmdpSection = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  @media (min-width: 425px) and (max-width: 1260px) {
    display:flex;
    width: 100%;
    height: auto;
    flex-direction: column;
  }
  @media (max-width: 425px) {
    display: block;
  }
`

export const UmdpImgContainer = styled.div`
    width: 100%;
    margin: 0;
    background: url(${Umdp});
    background-size: cover;
    background-position: 45% 45%;
    position: relative; 

    @media (min-width: 1260px) {
      width: 100%;
        &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2); 
        z-index: 1; 
    }
    }
    @media (max-width: 1260px) {
        display:none;
        height: 220px;
        padding: 0;
        margin: 3rem auto 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center 15%;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 270px;
        padding: 0;
        background-size: 150% auto;
    }
`;

export const UmdpTextContent = styled.div`
    width: 100%;
    margin:auto;
    @media (max-width: 1260px){
      width: 90%;
      margin: 3rem auto 0;
    }
`
export const UmdpTextContentContainer = styled.div`
   width: 100%;
    margin: 0;
    @media (min-width: 1260px) {
    padding: 2rem 6rem;
      width: 90%;
    }
    @media (max-width: 1260px){
      width: 90%;
      margin: auto;
    }
`;
export const UmdpTextContainer = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  place-items: center;
  @media (max-width: 1260px){
    height: auto;
    margin: 1rem auto 5rem;
  }
  
`

export const UmdpTitle = styled.h1`
  font-family: var(--font-family-title);
  font-size: clamp(1.75rem, 2.8vw, 64px);
  width: 100%;
  margin: 0 auto;
  text-transform: none;
`

export const UmdpParagrph = styled.p`
  width: 100%;
  margin: 20px auto;
  text-align: justify;
    word-spacing: -1px;
  letter-spacing: 0.5px; 
  hyphens: auto;
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
  padding: 5rem 0;
  display:grid;
  place-items: center;
  background: url(${ServicesFond});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const ServicesSectionContainer = styled.div`
  width: 90%;
  margin: auto;
  height: auto;
`

export const ServicestHeader = styled.header`
  width: 100%;
  margin: 0 auto 2.5rem;
  color: white;
  text-align: left;
  @media (max-width: 768px) {
    text-align: left;
  }
`

export const ServicesTitle = styled.h1`
  font-family: var(--font-family-title);
  font-size: clamp(1.75rem, 2.8vw, 64px);
  width: 100%;
  margin: auto;
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
  margin: auto;
  display: flex;
  justify-content: space-between;
`
export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3vw;
  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 4vh;
  }
`
export const Card = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: rgba(200, 200, 200, 0.045);
  box-shadow: 2px 3px 23px -3px rgba(0, 0, 0, 0.35);
  transition: 0.3s ease;
  cursor:pointer;
  text-align: center;
  color: white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.09);
    box-shadow: 2px 3px 23px -3px rgba(0, 0, 0, 0.75);
    transform: scale(1.005);
  }

  @media (max-width: 1400px) {
    width: 100%;
    height: 300px;
    margin: auto;
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
    height: 100%;
    flex: 0 0 40%;
  }
  @media (min-width: 768px) and (max-width: 1400px) {
      flex: 0 0 40%;
  }
`
export const CardImage = styled.img`
  width: 100%;
  height: 225px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1400px) {
    width: 100%;
    height: 100%;
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    object-fit: cover;
  }
  @media (max-width: 720px) {
    width: 100%;
    height: 200px;
  }
`
export const CardTextContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 1.2rem;
  display: grid;
  place-items: center;
  @media (min-width: 768px) and (max-width: 1400px) {
    flex: 0 0 60%; 
  }
`
export const CardTitle = styled.p`
  width: 100%;
  font-size: 1.19rem;
  font-weight: bold;
  margin: 0 auto 1rem;
  text-align: left;
`

/*------------------------------------------------------------Banner------------------------------------------------------------*/

export const BannerContainer = styled.div`
  width: 100%;
  margin-top: -1px;
  height: 300px;
  position: relative;
`
export const BannerVideo = styled.video`
  width: 100%;
  height: 300px;
  object-fit: cover;
`
export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  background-color: rgba(3, 2, 2, 0.65);
`
export const CitacionContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 300px;
  display: grid;
  place-items: center;
`
export const Citacion = styled.p`
  width: 100%;
  margin: auto;
  display: block;
  color: white;
  padding: 0.73rem;
  text-align: center;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  @media (min-width: 1024px) {
    width: 70%;
    font-size: 0.67rem;
  }
`

/*------------------------------------------------------------Contact------------------------------------------------------------*/

export const ContactContainer = styled.div`
  width: 100%;
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
  padding: 3rem 0;
  height: auto;
  display: flex;
  place-items: center;
  gap: 2rem;
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
    align-items: center;
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
  width: 90%;
  margin: auto;
  @media (min-width: 1440px) {
    width: ${(props) => (props.formSection ? '70%' : '75%')};

  }
`
export const ContactHeader = styled.header`
  width:100%
  margin: auto;
`
export const ContactTitle = styled.h1`
  font-family: var(--font-family-title);
  font-size: clamp(1.75rem, 2.8vw, 64px);
  width: 100%;
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
  margin: 1.2rem auto 4rem;
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
  padding: 0.5rem; /* Ajusta el padding si es necesario */
  margin: 0 auto 1rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.borderBottomColor || 'white'};
  color: white;
  resize: none;
  text-align: left; /* Alinea el texto a la izquierda */
  font-size: 0.95rem; /* Igualar el tamaño de fuente con el textarea */
  font-family: var(--font-family-text);
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    opacity: 0.5;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  ::placeholder {
    font-size: 0.6rem; /* Asegúrate de que el tamaño del placeholder sea consistente */
    font-family: var(--font-family-text);
    text-transform: uppercase;
    color: white;
    opacity: 1;
  }
`;

export const ContactTextarea = styled.textarea`
  width: 100%;
  padding: 0.5rem; /* Igualar el padding con el input */
  margin: 0 auto 1rem;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.borderBottomColor || 'white'};
  border-radius: 0;
  color: white;
  resize: none;
  text-align: left; /* Alinea el texto a la izquierda */
  font-size: 0.95rem; /* Igualar el tamaño de fuente con el textarea */
  font-family: var(--font-family-text);
  min-height: 3rem; /* Ajusta la altura mínima si es necesario */
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    opacity: 0.5;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  ::placeholder {
    font-size: 0.6rem; /* Asegúrate de que el tamaño del placeholder sea consistente */
    font-family: var(--font-family-text);
    text-transform: uppercase;
    color: white;
    opacity: 1;
  }
  ::-webkit-scrollbar {
    width: 7px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
  }
`;
export const ContactButton = styled.button`
  width: fit-content;
  margin: 1rem auto 0;
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
  margin: 0.5rem auto;
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
  margin: 2rem auto 0;
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
  word-spacing: -1px;
  letter-spacing: 0.5px; 
  hyphens: auto;
`;

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

export const ErrorText = styled.p`
  width:100%;
  margin:auto;
  color: red;
  text-align:right;
  font-size: 0.575rem;
  margin: 0;
`;

// Modal Overlay
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(3px);
  z-index: 1000;
`;

// Contenedor del Modal
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  color: black;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

export const ModalContent = styled.div`
  text-align: center;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  font-size: 1.5rem;
`;

// Logo del Modal
export const VsLogoModal = styled.img`
  width: clamp(100px , 25vw, 190px);
  margin-bottom: 1rem;
`;

export const ContactDetails = styled.div`
  margin-top: 1rem;
`;

export const ContactLink = styled.a`
  margin:10px 0;
  font-size: 0.59rem ;
  display:inline-block;
  text-decoration: none;
  font-size: 1rem !important;
  text-transform:lowecase !important;
  padding: 15px;
  color:white;
  background-color: black;
  border: 1px solid white;
  transistion: all 0.3s ease-in-out;
  &:hover {
      color:black;
      background-color:white;
      border:1px solid black
  }
`;


/*------------------------------------------------------------FAQ------------------------------------------------------------*/



export const FAQSection = styled.section`
  display: block;
  padding: 6rem auto;
  margin: auto;
  overflow: hidden;
   @media (min-width: 1260px){
      display: grid;
      grid-template-columns: 40% 60%;
      height: 100vh;
      padding: 0;
      margin: 0;
    }

`;

export const FaqImgContainer = styled.div`
    width: 100%;
    margin: 0;
    background: url(${Faq});
    background-size: cover;
    position: relative; 
  
        &::before {
        width: 100%;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
`;

export const FAQContent = styled.div`
   width: 100%;
    margin:auto;
    @media (min-width: 1260px){
      width: 90%;
      margin: auto;
    }
`;

export const FAQContentContainer = styled.div`
   width: 100%;
    margin:0;
    @media (min-width: 1260px) {
      width: 95%;
      height: 100vh;
      display:flex;
      flex-direction: column;
      justify-content:space-between;
    }
    @media (max-width: 1260px){
      width: 90%;
      margin: 3rem auto;
    }
`;

export const FAQHeader = styled.header`
  width: 100%;
  margin: 2rem auto 0;
  text-align: left;
    @media (min-width: 1260px){
      width: 90%;
    }

`

export const FaqBody = styled.section`
  width: 100%;
  margin: auto;
  padding-top:2rem;
  overflow-y: scroll;
    @media (min-width: 1260px){
      width: 90%;
      margin: auto;
      height: 75vh;
      padding-top:2rem;
      overflow-y: scroll;
    }
`
export const FaqFooter = styled.footer`
  width: 100%;
  margin: auto;
  height: 12vh;
  border-top:1px solid black;
  @media (min-width: 1260px){
      width: 90%;
    }
`


export const FAQTitle = styled.h2`
  font-family: var(--font-family-title);
  font-size: clamp(1.75rem, 2.8vw, 64px);
  width: 100%;
  margin:auto;
  text-transform: none;
  @media (max-width: 768px) {
    margin: auto;
  }
`;

export const FAQSubtitle = styled.h2`
  width: 100%
  margin: 0;
  text-align: left;
  font-size: 0.45rem;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

export const FAQItem = styled.div`
  margin-bottom: 1.5rem;
`;

export const FAQQuestion = styled.h3`
  font-size: 1.08rem;
  font-weight: bold;
`;

export const FAQAnswer = styled.p`
  font-size: 0.8rem;
  margin-top: 0.75rem;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.75rem;
  @media (max-width: 1024px) {
  justify-content: center;
  }
`;

export const PaginationButton = styled.button`
  background-color: #000000;
  border: 1px solid #fff;
  height: 40px;
  width: 40px;
  padding: 0.45rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  text-align: center;
  margin: 0 0.2rem;

  &.active {
    background-color: #ffffff;
    color: black;
    border: 1px solid black;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.89);
    color: #000000;
    border: 1px solid #000000;
  }
`;
