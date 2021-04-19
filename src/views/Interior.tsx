import RealEstate1 from '../assets/realEstate/RealEstate4.jpg'

import { ImEnter, ImExit } from 'react-icons/im'
import { AiFillHourglass } from 'react-icons/ai'

const Home = () => {
    const bgImg = {
        backgroundImage: `linear-gradient(to top, rgba(16, 29, 44, 0.8), rgba(16, 29, 44, 0.98)), url(${RealEstate1})`,
    }

    return (
        <>
            <header className='hero' style={bgImg}>
                <div className='hero__1'>
                    <h3 className='heading-3'>Property Management:</h3>
                    <h1 className='heading-1'>Lets Manage Your Properties</h1>
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
            <section className='features'>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <ImEnter />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>BUY</h4>
                    <h4 className='feature__text' style={{ fontWeight: 700 }}>
                        THE EASY WAY TO BUY!
                    </h4>
                    <p className='feature__text'>
                        Look no further We are here to help! Just let us know
                        what you want, where you want it and we will get it for
                        you!
                    </p>
                </div>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <AiFillHourglass />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>RENT</h4>
                    <h4 className='feature__text' style={{ fontWeight: 700 }}>
                        GREAT APARTMENTS AT AFFORDABLE PRICES
                    </h4>
                    <p className='feature__text'>
                        Looking to rent and apartment of office building? We got
                        you covered. We have great offers for you. Please reach
                        out to us today!
                    </p>
                </div>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <ImExit />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>SELL</h4>
                    <h4 className='feature__text' style={{ fontWeight: 700 }}>
                        SELL WITH CONFIDENCE
                    </h4>
                    <p className='feature__text'>
                        Do you have properties to sell? We can handle it! Please
                        go and rest. We are professionals! That’s what we do
                        best!
                    </p>
                </div>
            </section>{' '}
        </>
    )
}

export default Home
