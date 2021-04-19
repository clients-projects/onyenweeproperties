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

                    <div className='home__rooms'>
                        <p>5 rooms</p>
                    </div>

                    <div className='home__area'>
                        <svg></svg>
                        <p>
                            325 m<sup>2</sup>
                        </p>
                    </div>

                    <div className='home__price'>
                        <svg></svg>
                        <p>₦1,200,000</p>
                    </div>
                    <button className='btn home__btn'>View Property</button>
                </div>

                <div className='home'>
                    <img src={House2} alt='House 1' className='home__img' />

                    <h5 className='home__name'>Modern Glass Villa</h5>
                    <div className='home__location'>
                        <p>Canada</p>
                    </div>

                    <div className='home__rooms'>
                        <p>6 rooms</p>
                    </div>

                    <div className='home__area'>
                        <p>
                            450 m<sup>2</sup>
                        </p>
                    </div>

                    <div className='home__price'>
                        <p>₦2,750,000</p>
                    </div>
                    <button className='btn home__btn'>View Property</button>
                </div>

                <div className='home'>
                    <img src={House3} alt='House 3' className='home__img' />
                    <svg className='home__like'>
                        {/* <use xlinkHref="img/sprite.svg#icon-heart-full"></use> */}
                    </svg>
                    <h5 className='home__name'>Cozy Country House</h5>
                    <div className='home__location'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-map-pin"></use> */}
                        </svg>
                        <p>UK</p>
                    </div>

                    <div className='home__rooms'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-profile-male"></use> */}
                        </svg>
                        <p>4 rooms</p>
                    </div>

                    <div className='home__area'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-expand"></use> */}
                        </svg>
                        <p>
                            250 m<sup>2</sup>
                        </p>
                    </div>

                    <div className='home__price'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-key"></use> */}
                        </svg>
                        <p>₦850,000</p>
                    </div>
                    <button className='btn home__btn'>View Property</button>
                </div>

                <div className='home'>
                    <img src={House4} alt='House 1' className='home__img' />
                  g>
                    <h5 className='home__name'>Large Country Villa</h5>
                    <div className='home__location'>

                        <p>Maitama</p>
                    </div>

                    <div className='home__rooms'>
                     
                        <p>6 rooms</p>
                    </div>

                    <div className='home__area'>
                     
                        <p>
                            480 m<sup>2</sup>
                        </p>
                    </div>

                    <div className='home__price'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-key"></use> */}
                        </svg>
                        <p>₦1,950,000</p>
                    </div>
                    <button className='btn home__btn'>View Property</button>
                </div>
            </section>
        </>
    )
}

export default Homes
