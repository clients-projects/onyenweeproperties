import House1 from '../sass/img/house-1.jpeg'
import House2 from '../sass/img/house-2.jpeg'
import House3 from '../sass/img/house-3.jpeg'
import House4 from '../sass/img/house-4.jpeg'

// import SpriteHeartFull from '../sass/img/sprite.svg#icon-heart-full'

const Homes = () => {
    console.log('home logs')
    return (
        <>
            <h1>Services </h1>
            <section className='homes'>
                <div className='home'>
                    <img src={House1} alt='House 1' className='home__img' />
                    <svg className='home__like'></svg>
                    <h5 className='home__name'>Beautiful Family Home</h5>
                    <div className='home__location'>
                        <p>USA</p>
                    </div>

                    <div className='home__price'>
                        <svg></svg>
                        <p>₦1,200,000</p>
                    </div>
                    <button className='btn home__btn'>Real Estate</button>
                </div>

                <div className='home'>
                    <img src={House2} alt='House 1' className='home__img' />

                    <h5 className='home__name'>Modern Glass Villa</h5>
                    <div className='home__location'>
                        <p>Canada</p>
                    </div>

                    <div className='home__price'>
                        <p>₦2,750,000</p>
                    </div>
                    <button className='btn home__btn'>
                        Property management
                    </button>
                </div>

                <div className='home'>
                    <img src={House3} alt='House 3' className='home__img' />

                    <h5 className='home__name'>Cozy Country House</h5>
                    <div className='home__location'>
                        <i className='bx bxs-been-here'></i> <p>Lekki</p>
                    </div>

                    <div className='home__price'>
                        <p>₦850,000</p>
                    </div>
                    <button className='btn home__btn'>Construction</button>
                </div>

                <div className='home'>
                    <img src={House4} alt='House 1' className='home__img' />

                    <h5 className='home__name'>Large Country Villa</h5>
                    <div className='home__location'>
                        <i className='bx bxs-been-here'></i>
                        <p>Maitama</p>
                    </div>

                    <div className='home__price'>
                        <p>₦1,950,000</p>
                    </div>
                    <button className='btn home__btn'>Interior</button>
                </div>
            </section>
        </>
    )
}

export default Homes
