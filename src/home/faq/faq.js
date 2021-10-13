import { Accordion } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'

export const FAQ = () => {
  return (
    <>
      <Fade>
        <div className='text-center my-5 fadeIn'>
          <h1 className='display-3 fw-bold'>FAQ</h1>
          <h2 className='text-capitalize text-center display-6 my-3'>
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion defaultActiveKey='0' flush className='container mb-5 fadeIn'>
          <Accordion.Item eventKey='0' className='shadow-lg m-2'>
            <Accordion.Header>Why RITE?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1' className='shadow-lg m-2'>
            <Accordion.Header>Who are we?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2' className='shadow-lg m-2'>
            <Accordion.Header>How does the insurace work?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Fade>
    </>
  )
}
