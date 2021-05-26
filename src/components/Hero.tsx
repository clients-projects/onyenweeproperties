import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import HeroCouple from '../assets/realEstate/heroCouple.png'

const Hero = () => {
    return (
        <header className='hero'>
            <div>

            <div className='hero__1'>
                <h3 className='heading-3'>Your own home:</h3>
                <h1 className='heading-1'>Exquisite Homes Just For You</h1>
            </div>
            <Link className='btn hero__btn' to='/contact-us'>Contact Us Today</Link>
            </div>
            <div>
                <img src={HeroCouple} width='100%' height='100%' alt='heroCouple'/>
            </div>
           
        </header>
    )
}

export default Hero
