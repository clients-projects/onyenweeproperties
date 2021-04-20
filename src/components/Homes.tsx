import House2 from '../sass/img/house-2.jpeg'

import House1 from '../assets/realEstate/RealEstate2.jpg'
import House3 from '../assets/realEstate/building2.jpg'
import House4 from '../assets/realEstate/interior4.jpg'

// import SpriteHeartFull from '../sass/img/sprite.svg#icon-heart-full'

const Homes = () => {
    return (
        <>
            <section className='homes__box'>
            <h1 className='heading-1 heading-2--dark homes__heading'>
                Services{' '}
            </h1>
            <div className='homes'>
                <div className='home'>
                    <img src={House1} alt='House 1' className='home__img' />
                    <h5 className='home__name'>Real Estate</h5>
                </div>

                <div className='home'>
                    <img src={House2} alt='House 1' className='home__img' />

                    <h5 className='home__name'>Property Management</h5>
                </div>

                <div className='home'>
                    <img src={House3} alt='House 3' className='home__img' />

                    <h5 className='home__name'>Construction</h5>
                </div>

                <div className='home'>
                    <img src={House4} alt='House 1' className='home__img' />

                    <h5 className='home__name'>Interior</h5>
                </div>
                </div>
            </section>
        </>
    )
}

export default Homes
