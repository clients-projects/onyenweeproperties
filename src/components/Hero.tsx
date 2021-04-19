import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <header className='hero'>
            <div className='hero__1'>
                <h3 className='heading-3'>Your own home:</h3>
                <h1 className='heading-1'>Exquisite Homes Just For You</h1>
            </div>
            <Link className='btn hero__btn' to='/contact-us'>Contact Us Today</Link>
            <div>
                <div className='hero__followon-text'>Follow us on</div>
                <div className='hero__followon-logos'>
                    <Link to='/' className='hero__followon-link'>
                        {' '}
                        <FaFacebook />
                    </Link>
                    <Link to='/' className='hero__followon-link'>
                        {' '}
                        <FaInstagramSquare />
                    </Link>
                    <Link to='/' className='hero__followon-link'>
                        {' '}
                        <AiFillTwitterCircle />
                    </Link>
                    <Link to='/' className='hero__followon-link'>
                        {' '}
                        <AiFillLinkedin />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Hero
