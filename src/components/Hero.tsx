import { Link } from 'react-router-dom'

import HeroCouple from '../assets/realEstate/heroCouple.png'

const Hero = () => {
    console.log('update!')
    return (
        <header className='hero'>
            <div className='hero__1'>
                <h3 className='heading-3 hero__subtitle'>
                    Changing the way you experience property
                </h3>
                <h1 className='heading-1 hero__title'>
                    Onyenwee's Sales and Property Management Specialists
                </h1>
                <Link className='btn hero__btn' to='/contact-us'>
                    Contact Us
                </Link>
            </div>
            <div className='hero__img'>
                <img
                    src={HeroCouple}
                    width='100%'
                    height='100%'
                    alt='heroCouple'
                />
            </div>
        </header>
    )
}

export default Hero
