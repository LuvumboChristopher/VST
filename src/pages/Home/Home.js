import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import ResponsiveMenu from './components/Navbar/ResponsiveMenu';
import Accueil from './screens/Accueil/Accueil';
import Umdp from './screens/Umdp/Umdp';
import Services from './screens/Services/Services';
import FAQ from './screens/FAQ/FAQ';
import Contact from './screens/Contact/Contact';
import Footer from './components/Footer/Footer';
import Banner from './screens/Banner/Banner';

function Home() {
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const sections = ['accueil', 'umdp', 'services', 'faq', 'banner', 'contact'];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: [0.6, 0.7, 0.8, 0.9, 1] });

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  useEffect(() => {
    const titles = {
      accueil: 'Accueil - Bienvenue chez Vinyl Store! - VinylStoreLyon',
      umdp: 'UMDP - Un Mot Du Proprio - Découvrez la passion derrière notre boutique de vinyles - VinylStoreLyon',
      services: 'Services - Profitez de nos offres exclusives pour vinyles - VinylStoreLyon',
      faq: 'FAQ - Questions Fréquemment Posées - VinylStoreLyon',
      banner: 'Banner - Découvrez nos dernières offres - VinylStoreLyon',
      contact: 'Contact - Contactez-nous pour vos demandes de vinyles - VinylStoreLyon'
    };

    document.title = titles[activeSection] || 'VinylStore - Votre boutique de vinyles à Lyon';
  }, [activeSection]);

  return (
    <section>
      <Navbar activeSection={activeSection} />
      <ResponsiveMenu />
      <Accueil id="accueil" />
      <Umdp id="umdp" />
      <Services id="services" />
      <FAQ id="faq" />
      <Banner id="banner" />
      <Contact id="contact" />
      <Footer />
    </section>
  );
}

export default Home;