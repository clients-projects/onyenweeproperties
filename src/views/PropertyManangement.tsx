import React from 'react'
import RealEstate1 from '../assets/realEstate/RealEstate1.jpg'

import { ImLocation2 } from 'react-icons/im'
import { GiVikingLonghouse, GiLaurelsTrophy } from 'react-icons/gi'

const PropertyManagement = () => {
    const bgImg = {
        backgroundImage: `linear-gradient(to top, rgba(16, 29, 44, 0.8), rgba(16, 29, 44, 0.98)), url(${RealEstate1})`,
    }
    return (
        <>
            <header className='hero' style={bgImg}>
                <div className='hero__1'>
                    <h3 className='heading-3'>Your own home:</h3>
                    <h1 className='heading-1'>Exquisite Homes Just For You</h1>
                </div>
                <button className='btn hero__btn'>Contact Us Today</button>
            </header>
            <section className='features'>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <GiVikingLonghouse />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>
                        Best luxury homes
                    </h4>
                    <p className='feature__text'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Tenetur distinctio necessitatibus pariatur
                        voluptatibus.
                    </p>
                </div>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <GiLaurelsTrophy />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>
                        Only the best properties
                    </h4>
                    <p className='feature__text'>
                        Voluptatum mollitia quae. Vero ipsum sapiente molestias
                        accusamus rerum sed a eligendi aut quia.
                    </p>
                </div>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <ImLocation2 />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>
                        All homes in top locations
                    </h4>
                    <p className='feature__text'>
                        Tenetur distinctio necessitatibus pariatur voluptatibus
                        quidem consequatur harum.
                    </p>
                </div>
            </section>{' '}
        </>
    )
}

export default PropertyManagement
