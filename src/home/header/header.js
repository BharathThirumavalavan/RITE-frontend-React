import firstImg from '../../assets/warehouse.jpg'
import { AttentionSeeker } from 'react-awesome-reveal'

export const Header = () => {
  return (
    <div className='header' style={{ backgroundImage: `url(${firstImg})` }}>
      <span>
        <h1 className='display-1 my-4'>Welcome to RITE!</h1>
        <h3 className='my-3 font'>Monitor package throughout transit</h3>
        <AttentionSeeker effect={'tada'} delay={1000} triggerOnce>
          <a className='btn btn-primary my-4 text-white style-5' href='/login'>
            Book now
          </a>
        </AttentionSeeker>
      </span>
    </div>
  )
}
