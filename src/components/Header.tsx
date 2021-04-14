import Logo from '../sass/img/logo.png'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <h3 className='heading-3'>Your own home:</h3>
            <h1 className='heading-1'>The ultimate personal freedom</h1>
            <button className='btn header__btn'>View our properties</button>
            <div className='header__followon-text'>Follow us on</div>
            <div className='header__followon-logos'>
                <Link to='/' className='header__followon-link'>
                    {' '}
                    <FaFacebook/>
                </Link>
                <Link to='/' className='header__followon-link'>
                    {' '}
                    <FaInstagramSquare />
                </Link>
                <Link to='/' className='header__followon-link'>
                    {' '}
                    <AiFillTwitterCircle />
                </Link>
                <Link to='/' className='header__followon-link'>
                    {' '}
                    <AiFillLinkedin />
                </Link>
            </div>
        </header>
    )
}

export default Header
