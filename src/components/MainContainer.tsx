import { lazy, Suspense } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import WhatIDo from './WhatIDo'
import Career from './Career'
import Cursor from './Cursor'
import SocialIcons from './SocialIcons'
import ScrollProgress from './ScrollProgress'

const WasabiWork = lazy(() => import('./WasabiWork'))
const Work = lazy(() => import('./Work'))
const Awards = lazy(() => import('./Awards'))
const TechStack = lazy(() => import('./TechStack'))
const Contact = lazy(() => import('./Contact'))

const MainContainer = () => {
  return (
    <>
      <ScrollProgress />
      <Cursor />
      <SocialIcons />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Career />
        <Suspense fallback={null}>
          <WasabiWork />
          <Work />
          <Awards />
          <TechStack />
          <Contact />
        </Suspense>
      </main>
    </>
  )
}

export default MainContainer
