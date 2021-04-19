import RealEstate1 from '../assets/realEstate/RealEstate4.jpg'


import Interior1 from '../assets/realEstate/interior1.jpg'
import Interior2 from '../assets/realEstate/interior2.jpg'
import Interior3 from '../assets/realEstate/interior3.jpg'
import Interior4 from '../assets/realEstate/interior4.jpg'

const Home = () => {
    const bgImg = {
        backgroundImage: `linear-gradient(to top, rgba(16, 29, 44, 0.8), rgba(16, 29, 44, 0.98)), url(${RealEstate1})`,
    }

    const sizeImg = {
        width: 360,
        height: 270,
    }

    return (
        <>
            <header className='hero' style={bgImg}>
                <div className='hero__1'>
                    <h3 className='heading-3'>Interior:</h3>
                    <h1 className='heading-1'>Your Comfort, Our Concern</h1>
                </div>
                <button className='btn hero__btn'>Contact Us Today</button>
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
            </div>{' '}
            <section className='homes__box'>
                <div className='homes'>
                    <div className='home'>
                        <img
                            src={Interior1}
                            alt='House 1'
                            className='home__img'
                            style={sizeImg}
                        />
                        <h5 className='home__name'>Real Estate</h5>
                    </div>

                    <div className='home'>
                        <img
                            src={Interior2}
                            alt='House 1'
                            className='home__img'
                            style={sizeImg}
                        />

                        <h5 className='home__name'>Property Management</h5>
                    </div>

                    <div className='home'>
                        <img
                            src={Interior3}
                            alt='House 3'
                            className='home__img'
                            style={sizeImg}
                        />

                        <h5 className='home__name'>Construction</h5>
                    </div>

                    <div className='home'>
                        <img
                            src={Interior4}
                            alt='House 1'
                            className='home__img'
                            style={sizeImg}
                        />

                        <h5 className='home__name'>Interior</h5>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
