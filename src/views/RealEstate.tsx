import RealEstate1 from '../assets/realEstate/RealEstate1.jpg'

import House1 from '../sass/img/house-1.jpeg'
import House2 from '../sass/img/house-2.jpeg'
import House3 from '../sass/img/house-3.jpeg'
import House4 from '../sass/img/house-4.jpeg'
import House5 from '../sass/img/house-5.jpeg'
import House6 from '../sass/img/house-6.jpeg'

const RealEstate = () => {
    return (
        <div className='realEstate'>
            <img
                src={RealEstate1}
                alt='realEstate'
                className='realEstate_img'
            />
            <div className='realEstate__heading'></div>

            <section className='homes'>
                <div className='home'>
                    <img src={House1} alt='House 1' className='home__img' />
                    <svg className='home__like'>
                        {/* <use xlinkHref={SpriteHeartFull}></use>  */}
                    </svg>
                    <h5 className='home__name'>Beautiful Family Home</h5>
                    <div className='home__location'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-map-pin"></use> */}
                        </svg>
                        <p>USA</p>
                    </div>

                    <div className='home__rooms'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-profile-male"></use> */}
                        </svg>
                        <p>5 rooms</p>
                    </div>

                    <div className='home__area'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-expand"></use> */}
                        </svg>
                        <p>
                            325 m<sup>2</sup>
                        </p>
                    </div>

                    <div className='home__price'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-key"></use> */}
                        </svg>
                        <p>$1,200,000</p>
                    </div>
                    <button className='btn home__btn'>View Property</button>
                </div>

                <div className='home'>
                    <img src={House2} alt='House 1' className='home__img' />
                    <svg className='home__like'>
                        {/* <use xlinkHref="img/sprite.svg#icon-heart-full"></use> */}
                    </svg>
                    <h5 className='home__name'>Modern Glass Villa</h5>
                    <div className='home__location'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-map-pin"></use> */}
                        </svg>
                        <p>Canada</p>
                    </div>

                    <div className='home__rooms'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-profile-male"></use> */}
                        </svg>
                        <p>6 rooms</p>
                    </div>

                    <div className='home__area'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-expand"></use> */}
                        </svg>
                        <p>
                            450 m<sup>2</sup>
                        </p>
                    </div>

                    <div className='home__price'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-key"></use> */}
                        </svg>
                        <p>$2,750,000</p>
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
                        <p>$850,000</p>
                    </div>
                    <button className='btn home__btn'>View Property</button>
                </div>

                <div className='home'>
                    <img src={House4} alt='House 1' className='home__img' />
                    <svg className='home__like'>
                        {/* <use xlinkHref="img/sprite.svg#icon-heart-full"></use> */}
                    </svg>
                    <h5 className='home__name'>Large Country Villa</h5>
                    <div className='home__location'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-map-pin"></use> */}
                        </svg>
                        <p>Portugal</p>
                    </div>

                    <div className='home__rooms'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-profile-male"></use> */}
                        </svg>
                        <p>6 rooms</p>
                    </div>

                    <div className='home__area'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-expand"></use> */}
                        </svg>
                        <p>
                            480 m<sup>2</sup>
                        </p>
                    </div>

                    <div className='home__price'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-key"></use> */}
                        </svg>
                        <p>$1,950,000</p>
                    </div>
                    <button className='btn home__btn'>View Property</button>
                </div>

                <div className='home'>
                    <img src={House5} alt='House 5' className='home__img' />
                    <svg className='home__like'>
                        {/* <use xlinkHref="img/sprite.svg#icon-heart-full"></use> */}
                    </svg>
                    <h5 className='home__name'>Majestic Mansion</h5>
                    <div className='home__location'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-map-pin"></use> */}
                        </svg>
                        <p>Germany</p>
                    </div>

                    <div className='home__rooms'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-profile-male"></use> */}
                        </svg>
                        <p>18 rooms</p>
                    </div>

                    <div className='home__area'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-expand"></use> */}
                        </svg>
                        <p>
                            4230 m<sup>2</sup>
                        </p>
                    </div>

                    <div className='home__price'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-key"></use> */}
                        </svg>
                        <p>$9,500,000</p>
                    </div>
                    <button className='btn home__btn'>View Property</button>
                </div>

                <div className='home'>
                    <img src={House6} alt='House 6' className='home__img' />
                    <svg className='home__like'>
                        {/* <use xlinkHref="img/sprite.svg#icon-heart-full"></use> */}
                    </svg>
                    <h5 className='home__name'>Modern Family Apartment</h5>
                    <div className='home__location'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-map-pin"></use> */}
                        </svg>
                        <p>Italy</p>
                    </div>

                    <div className='home__rooms'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-profile-male"></use> */}
                        </svg>
                        <p>3 rooms</p>
                    </div>

                    <div className='home__area'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-expand"></use> */}
                        </svg>
                        <p>
                            180 m<sup>2</sup>
                        </p>
                    </div>

                    <div className='home__price'>
                        <svg>
                            {/* <use xlinkHref="img/sprite.svg#icon-key"></use> */}
                        </svg>
                        <p>$600,000</p>
                    </div>
                    <button className='btn home__btn'>View Property</button>
                </div>
            </section>
        </div>
    )
}

export default RealEstate