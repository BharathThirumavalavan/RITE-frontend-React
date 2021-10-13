import {
  faPhone,
  faEnvelopeOpenText,
  faMap,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'

export const Contact = () => {
  return (
    <Fade>
      <div className='bg-dark text-light w-100 fadeIn' id='contact-us'>
        <Container className='my-5'>
          <div className='row'>
            <div className='mt-4 col-md'>
              <FontAwesomeIcon icon={faPhone} style={{ fontSize: '40px' }} />
              <span className='display-6 fs-3  mx-2'>+91-6383608784</span>
            </div>
            <div className='mt-4 col-md'>
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                style={{ fontSize: '40px' }}
              />
              <a
                href='loslory@gmail.com'
                className='text-decoration-none text-white'
                target='_blank'
              >
                <span className='display-6 fs-3 mx-3'>loslory@gmail.com</span>
              </a>
            </div>
            <div className='mt-4 col-md'>
              <FontAwesomeIcon icon={faMap} style={{ fontSize: '40px' }} />
              <span className='display-6 fs-3 mx-3'>Chennai, TamilNadu</span>
            </div>
          </div>
        </Container>
        <div className='bg-primary w-100 text-dark p-3 my-5'>
          <div className='container row text-center'>
            <h4 className='col-lg-8  col-md-6 col-12 align-self-center'>
              Reach us on other Platforms
            </h4>
            <span className='col-lg-4  col-md-6 col-12'>
              <a href='https://www.facebook.com/' className='brandHover'>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className='text-dark mx-3'
                  style={{ fontSize: '40px' }}
                />
              </a>
              <a href='https://www.instagram.com/' className='brandHover'>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className='text-dark mx-3'
                  style={{ fontSize: '40px' }}
                />
              </a>
              <a href='https://www.twitter.in/' className='brandHover'>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className='text-dark mx-3'
                  style={{ fontSize: '40px' }}
                />
              </a>
            </span>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md'>
              <h2 className='fs-2'>RITE</h2>
              <hr style={{ width: '100%' }} />
              <p>
                RITE is designed around shortening supplychain reducing
                overcost.
              </p>
            </div>
            <div className='col-md'>
              <h2 className='fs-2'>Register as Owner</h2>
              <hr style={{ width: '100%' }} />
              <p>Option will be added.</p>
            </div>
            <div className='col-sm'>
              <h2 className='fs-2'>Register as Driver</h2>
              <hr style={{ width: '100%' }} />
              <p>Option will be added.</p>
            </div>
          </div>
        </div>
      </div>
      <footer className='bg-black text-center text-white fs-5 p-3 fadeIn'>
        © Copyright 2021 RITE
      </footer>
    </Fade>
  )
}
