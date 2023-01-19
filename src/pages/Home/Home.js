import React from 'react'


import Navbar from './components/Navbar/Navbar'
import ResponsiveMenu from './components/Navbar/ResponsiveMenu'


import Accueil from './screens/Accueil/Accueil'
import Umdp from './screens/Umdp/Umdp'
import Services from './screens/Services/Services'
import Banner from './screens/Banner/Banner'
import Contact from './screens/Contact/Contact'


function Home() {
  return (
    <section>
      <Navbar />
      <ResponsiveMenu/>
      <Accueil />
      <Umdp />
      <Services />
      <Banner />
      <Contact />
    </section>
  )
}

export default Home
