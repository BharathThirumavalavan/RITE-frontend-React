import { NavBar } from './nav/nav'
import { Header } from './header/header'
import { Services } from './services/Services'
import { FAQ } from './faq/faq'
import { Contact } from './contact/contact_us'

export const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Services />
      <FAQ />
      <Contact />
    </>
  )
}
