import booking from '../../assets/booking.png'
import track from '../../assets/tracking.png'
import insure from '../../assets/protect.png'
import { Fade } from 'react-awesome-reveal'

export const Services = () => {
  return (
    <Fade>
      <section id='services' className='services mt-5'>
        <div className='container'>
          <div className='row text-center my-4'>
            <h1 className='display-3 fw-bold'>Our Services</h1>
          </div>
          <div className='row pt-2 pb-2 mt-0 mb-3'>
            <div className='col-md-6 border-right'>
              <div className='bg-white p-3'>
                <h2 className='text-capitalize text-center display-6'>
                  Our service starts with booking, monitoring and safety
                  assurance.
                </h2>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='bg-white p-4 text-start'>
                <p>
                  Lorem ipsum dolor sit amet consectetur architecto magni, dicta
                  maxime laborum temporibus dolorem esse doloremque illo quas
                  nisi enim molestias. Tempore ducimus molestiae in dolore enim.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4'>
              <div>
                <h3 className='display-3--title mt-1 text-primary'>Booking</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                  impedit rem, doloremque autem quibusdam blanditiis harum alias
                  hic accusantium maxime atque ratione magni repellat?
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4'>
              <div className='d-flex justify-content-center'>
                <img
                  src={booking}
                  className='justify-content-center'
                  alt='Booking'
                  style={{ height: '30vh' }}
                />
              </div>
            </div>
          </div>
          <hr
            style={{
              height: '1px',
              width: '50%',
              margin: '1rem auto',
            }}
          />
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4'>
              <div className='d-flex justify-content-center'>
                <img
                  src={track}
                  className='justify-content-center'
                  alt='Tracking'
                  style={{ height: '30vh' }}
                />
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4'>
              <h3 className='display-3--title mt-1 text-primary'>Monitoring</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                impedit rem, doloremque autem quibusdam blanditiis harum alias
                hic accusantium maxime atque ratione magni repellat?
              </p>
            </div>
          </div>
          <hr
            style={{
              height: '1px',
              width: '50%',
              margin: '2rem auto',
            }}
          />
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4'>
              <h3 className='display-3--title mt-1 text-primary'>Insurance</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                impedit rem, doloremque autem quibusdam blanditiis harum alias
                hic accusantium maxime atque ratione magni repellat?
              </p>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end'>
              <div className='d-flex justify-content-center'>
                <img
                  src={insure}
                  className='justify-content-center'
                  alt='Insurance'
                  style={{ height: '30vh' }}
                />
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            height: '1px',
            width: '50%',
            margin: '2rem auto',
          }}
        />
      </section>
    </Fade>
  )
}
