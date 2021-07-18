import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

import RealEstate1 from '../assets/realEstate/RealEstate4.jpg'
import Interior1 from '../assets/realEstate/interior1.jpg'
import Interior2 from '../assets/realEstate/interior2.jpg'
import Interior3 from '../assets/realEstate/interior3.jpg'
import Interior4 from '../assets/realEstate/interior4.jpg'

const Home = () => {
    const bgImg = {
        backgroundImage: `linear-gradient(to bottom, rgb(191, 191, 191) 20%, rgba(16, 29, 44, 0.4)), url(${RealEstate1})`,
    }

    const sizeImg = {
        width: '100%',
        height: '100%'
    }

    const divHeight = {
        height: '50rem'
    }

    return (
        <>
            <header className='heropages' style={bgImg}>
                <div className='heropages__1'>
                    <h3 className='heading-3'>Interior:</h3>
                    <h1 className='heading-1'>Your Comfort, Our Concern</h1>
                </div>
            </header>{' '}
            <div className='whoWeAre'>
                <h2 className='heading-1 heading-2--dark whoWeAre__title'>
                    Onyenwee Interiors
                </h2>
                <p className='whoWeAre__text'>
                    We supply wide range of high quality household furniture and
                    electronics at great prices. These include, bathroom
                    fittings, bathtubs, Water Closets, Dining tables, settees,
                    side stools, etc.
                </p>
                <p className='whoWeAre__text'>
                    Contact us for your office furniture and interior we are
                    into sales and purchase of furniture, toiletries,
                    electronics appliances and house hold equipment whole sale
                    supply hotels and public centers.
                </p>
            </div>{' '}
            <section className='homes__box'>
                <div className='homes'>
                    <div className='home' style={divHeight}>
                        <img
                            src={Interior1}
                            alt='House 1'
                            className='home__img'
                            style={sizeImg}
                        />
                    </div>

                    <div className='home' style={divHeight}>
                        <img
                            src={Interior2}
                            alt='House 1'
                            className='home__img'
                            style={sizeImg}
                        />
                    </div>

                    <div className='home' style={divHeight}>
                        <img
                            src={Interior3}
                            alt='House 3'
                            className='home__img'
                            style={sizeImg}
                        />
                    </div>

                    <div className='home' style={divHeight}>
                        <img
                            src={Interior4}
                            alt='House 1'
                            className='home__img'
                            style={sizeImg}
                        />
                    </div>
                </div>
            </section>
            <div className='btnBox'>
                <Link className='btn btn1' to='contact-us'>
                    Talk To Us Now{' '}
                    <span>
                        <FaLongArrowAltRight />
                    </span>
                </Link>
            </div>
        </>
    )
}

export default Home
