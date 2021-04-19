import React from 'react'
import RealEstate1 from '../assets/realEstate/RealEstate1.jpg'

import { ImLocation2 } from 'react-icons/im'
import { GiVikingLonghouse, GiLaurelsTrophy } from 'react-icons/gi'

const Construction = () => {
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
                        When it comes to building construction, Onyenwee
                        Properties is the best choice. We have best in class
                        building engineers with year of experience. We take on
                        your building project from start to finish. No matter
                        the size of your project, we are able to see it through
                        start to finish. Engage us today!
                    </p>
                </div>
            </section>{' '}
        </>
    )
}

export default Construction
