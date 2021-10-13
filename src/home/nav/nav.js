import { Navbar, Container, Nav } from 'react-bootstrap/'
import logo from '../../assets/icon.png'
import { React, useState, useEffect } from 'react'

export const NavBar = () => {
  const [visiblity, setVisiblity] = useState(false)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > 80) {
        setVisiblity(true)
      } else {
        setVisiblity(false)
      }
    })
  }, [])

  return visiblity ? <Navigation /> : null
}

const Navigation = () => {
  return (
    <Navbar bg='light' expand='md' className='top-down-animate p-2 fixed-top'>
      <Container md>
        <nav href='#home' className='display-6'>
          <img
            src={logo}
            width='60'
            height='60'
            className='mx-1'
            alt='RITE logo'
          />
          RITE
        </nav>
        <Navbar.Toggle className='bg-light' aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Nav.Link href='#login' className='m-2'>
              Booking
            </Nav.Link>
            <Nav.Link href='#contact-us' className='m-2'>
              Contact-us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
