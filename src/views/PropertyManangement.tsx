import Features from '../components/Features'
import Hero from '../components/Hero'

import WhoWeAre from '../components/whoWeAre'

const Home = () => {
    return (
        <>
            <header className='hero'>
                <div className='hero__1'>
                    <h3 className='heading-3'>Your own home:</h3>
                    <h1 className='heading-1'>Exquisite Homes Just For You</h1>
                </div>
                <button className='btn hero__btn'>Contact Us Today</button>
                
            </header>{' '}
            <WhoWeAre />
            <Features />
        </>
    )
}

export default Home
