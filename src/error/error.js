import errorImg from '../assets/error.png'
export const ErrorPage = () => {
  return (
    <div className='my-5 p-5 animateSlide'>
      <img
        src={errorImg}
        alt='Error-Message'
        className='d-flex mx-auto my-3'
        style={{ height: '30vh' }}
      />
      <h2 className='display-5 text-center my-3'>
        Oops you're on wrong side of RITE
      </h2>
      <p className='text-muted fs-1 text-center'>Error 404 </p>
      <p className='text-muted fs-3 text-center'>Page Not Found </p>
      <div className='d-flex justify-content-center'>
        <a className='btn btn-danger text-center my-3 ' href='/'>
          Go Home
        </a>
      </div>
    </div>
  )
}
