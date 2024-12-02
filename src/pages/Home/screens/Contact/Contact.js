import React, { useState } from 'react';
import data from '../../../../data/data.json';
import vslogo from '../../../../assets/img/vs_logo_black.png';
import {
  ContactContainer,
  ContactLeft,
  ContactRight,
  ContactSection,
  SectionContainer,
  ContactHeader,
  ContactTitle,
  ContactSubtitle,
  ContactForm,
  ContactInput,
  ContactTextarea,
  ContactButton,
  FooterNav,
  FooterInfo,
  FooterContainer,
  PlanDuSite,
  PlanDuSiteContainer,
  PlanDuSiteContent,
  Copyright,
  NewsletterContainer,
  LoremTitle,
  LoremText,
  NewsletterInput,
  NewsletterButton,
  ModalOverlay,
  ModalContainer,
  ModalContent,
  CloseButton,
  VsLogoModal,
  ErrorText,
  ContactDetails,
  ContactLink
} from '../../style';

import { FaBullseye, FaEnvelope } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { IoGlobeOutline } from 'react-icons/io5';

const Contact = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [errors, setErrors] = useState({});
  const [formValidity, setFormValidity] = useState({
    nom: 'white',
    prenom: 'white',
    telefone: 'white',
    sujet: 'white',
    message: 'white',
  });
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telefone: '',
    sujet: '',
    message: '',
  });
  const [submittedData, setSubmittedData] = useState(null);

  const MAX_MESSAGE_LENGTH = 500; 

  const validateInput = (id, value) => {
    switch (id) {
      case 'nom':
      case 'prenom':
      case 'sujet':
        return value.trim() !== '' ? '#287233' : 'red';
      case 'telefone':
        return /^[0-9]{10}$/.test(value) ? '#287233' : 'red';
      case 'message':
        return value.length <= MAX_MESSAGE_LENGTH ? '#287233' : 'red';
      default:
        return 'white';
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let formattedValue = value;

    if (id === 'telefone') {
      formattedValue = value.replace(/\D/g, '').slice(0, 10);
    } else if (id === 'message') {
      formattedValue = value.slice(0, MAX_MESSAGE_LENGTH);
    } else {
      formattedValue = capitalizeFirstLetter(value);
    }

    const color = validateInput(id, formattedValue);

    setFormValidity((prev) => ({
      ...prev,
      [id]: color,
    }));

    if (color === 'red') {
      setErrors((prev) => ({ ...prev, [id]: id === 'message' ? 'Le message ne doit pas dépasser 500 caractères.' : 'Ce champ est obligatoire ou invalide.' }));
    } else {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }

    setFormData((prev) => ({ ...prev, [id]: formattedValue }));
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    const color = validateInput(id, value);

    setFormValidity((prev) => ({
      ...prev,
      [id]: color,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fields = ['nom', 'prenom', 'telefone', 'sujet', 'message'];
    const newErrors = {};

    fields.forEach((field) => {
      const value = formData[field];
      const color = validateInput(field, value);
      if (color === 'red') {
        newErrors[field] = field === 'message' ? 'Le message ne doit pas dépasser 500 caractères.' : 'Ce champ est obligatoire ou invalide.';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmittedData(formData);

    setShowBanner(true);

    setFormData({
      nom: '',
      prenom: '',
      telefone: '',
      sujet: '',
      message: '',
    });

    setFormValidity({
      nom: 'white',
      prenom: 'white',
      telefone: 'white',
      sujet: 'white',
      message: 'white',
    });

    setErrors({});
  };

  return (
    <section id='contact'>
      <ContactContainer>
        <ContactLeft>
          <SectionContainer formSection>
            <ContactHeader>
              <ContactTitle>Contact & Accés</ContactTitle>
              <ContactSubtitle>Formulaire de contact</ContactSubtitle>
            </ContactHeader>
            <ContactSection>
              <ContactForm onSubmit={handleSubmit}>
                <ContactInput
                  type='text'
                  name='Nom'
                  id='nom'
                  placeholder='Nom'
                  value={formData.nom}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  borderBottomColor={formValidity.nom}
                />
                {errors.nom && <ErrorText>{errors.nom}</ErrorText>}
                
                <ContactInput
                  type='text'
                  name='Prenom'
                  id='prenom'
                  placeholder='Prenom'
                  value={formData.prenom}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  borderBottomColor={formValidity.prenom}
                />
                {errors.prenom && <ErrorText>{errors.prenom}</ErrorText>}
                
                <ContactInput
                  type='tel'
                  name='Telefone'
                  id='telefone'
                  placeholder='Telephone'
                  maxLength='10'
                  value={formData.telefone}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  borderBottomColor={formValidity.telefone}
                />
                {errors.telefone && <ErrorText>{errors.telefone}</ErrorText>}
                
                <ContactInput
                  type='text'
                  name='Sujet'
                  id='sujet'
                  placeholder='Sujet'
                  value={formData.sujet}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  borderBottomColor={formValidity.sujet}
                />
                {errors.sujet && <ErrorText>{errors.sujet}</ErrorText>}
                
                <ContactTextarea
                  placeholder='Message'
                  name='message'
                  id='message'
                  cols='10'
                  rows='3'
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  borderBottomColor={formValidity.message}
                  maxLength={MAX_MESSAGE_LENGTH}
                ></ContactTextarea>
                {errors.message && <ErrorText>{errors.message}</ErrorText>}
                
                <ContactButton type='submit'>Envoyer</ContactButton>
              </ContactForm>
              {showBanner && (
                <>
                  <ModalOverlay />
                  <ModalContainer>
                    <CloseButton onClick={() => setShowBanner(false)}>
                      <MdClose size={24} />
                    </CloseButton>
                    <ModalContent>
                      <VsLogoModal
                        src={vslogo}
                        title='VinyleStore Logo'
                        alt='VinylStore Logo'
                      />
                      <LoremText style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '1rem' }}>
                        Votre message a été envoyé avec succès !
                      </LoremText>
                      <LoremText style={{ fontSize: 'smaller', textAlign: 'center', marginBottom: '1rem' }}>
                        (Remarque : cet e-mail n'a pas été réellement envoyé. Ce formulaire est à des fins de démonstration seulement et aucun message n'a été transmis ni traité par aucun système.)
                      </LoremText>
                      <ContactDetails>
                        <LoremText style={{ fontSize: 'smaller', textAlign: 'center', marginBottom: '1rem' }}>
                          Si vous avez des questions supplémentaires ou souhaitez me contacter directement, vous pouvez m'envoyer un e-mail à l'adresse suivante :
                        </LoremText>
                        <ContactLink href='mailto:christopherluvumbo.dev@gmail.com'>
                          <FaEnvelope size={16} /> Envoyer un e-mail
                        </ContactLink>
                        <LoremText style={{ fontSize: 'smaller', textAlign: 'center', marginBottom: '1rem' }}>
                          Vous pouvez également me suivre sur les réseaux sociaux ou visiter mon site web :
                        </LoremText>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                          <ContactLink href='https://github.com/LuvumboChristopher' target='_blank' rel='noopener noreferrer'>
                            <FaGithub size={16} /> GitHub
                          </ContactLink>
                          <ContactLink href='https://www.linkedin.com/in/christopher-luvumbo/' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin size={16} /> LinkedIn
                          </ContactLink>
                          <ContactLink href='https://christopherluvumbo.vercel.app/' target='_blank' rel='noopener noreferrer'>
                            <IoGlobeOutline size={16} /> Site Web
                          </ContactLink>
                        </div>
                      </ContactDetails>
                    </ModalContent>
                  </ModalContainer>
                </>
              )}
              <FooterNav>
                <FooterInfo>
                  <FooterContainer>
                    <LoremTitle>{data.about.title}</LoremTitle>
                    <LoremText>{data.about.text}</LoremText>
                    <Copyright>
                      ©{new Date().getFullYear()} VinylStore Lyon.
                    </Copyright>
                  </FooterContainer>
                  <FooterContainer>
                    <PlanDuSite>
                      <LoremTitle>Plan du site</LoremTitle>
                      <PlanDuSiteContainer>
                        <PlanDuSiteContent>
                          <a href='#accueil'>Accueil</a>
                        </PlanDuSiteContent>
                        <PlanDuSiteContent>
                          <a href='#umdp'>Un mot du proprio</a>
                        </PlanDuSiteContent>
                        <PlanDuSiteContent>
                          <a href='#services'>Nos Services</a>
                        </PlanDuSiteContent>
                        <PlanDuSiteContent>
                          <a href='/store'>Store</a>
                        </PlanDuSiteContent>
                        <PlanDuSiteContent>
                          <a href='#contact'>Contact & Accés</a>
                        </PlanDuSiteContent>
                      </PlanDuSiteContainer>
                    </PlanDuSite>
                  </FooterContainer>
                </FooterInfo>
              </FooterNav>
            </ContactSection>
          </SectionContainer>
        </ContactLeft>
        <ContactRight>
          <SectionContainer>
            <NewsletterContainer>
              <LoremTitle>
                {data.newsletter.title}
              </LoremTitle>
              <LoremText>
                {data.newsletter.text}
              </LoremText>
              <NewsletterInput
                type='text'
                name='Newsletter'
                id='newsletter'
                placeholder='example@example.com'
              />
              <NewsletterButton disabled='disabled'>Souscrire</NewsletterButton>
            </NewsletterContainer>
          </SectionContainer>
        </ContactRight>
      </ContactContainer>
    </section>
  );
};

export default Contact;
