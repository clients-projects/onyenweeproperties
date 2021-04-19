import React from 'react'
import RealEstate1 from '../assets/realEstate/RealEstate1.jpg'

import { GiVikingLonghouse } from 'react-icons/gi'

const PropertyManagement = () => {
    const bgImg = {
        backgroundImage: `linear-gradient(to top, rgba(16, 29, 44, 0.8), rgba(16, 29, 44, 0.98)), url(${RealEstate1})`,
    }
    return (
        <>
            <header className='hero' style={bgImg}>
                <div className='hero__1'>
                    <h3 className='heading-3'>Property Management:</h3>
                    <h1 className='heading-1'>
                        Manage Your Properties With Us
                    </h1>
                </div>
                <button className='btn hero__btn'>Contact Us Today</button>
            </header>
            <section className='features'>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <GiVikingLonghouse />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>
                        Property Management
                    </h4>
                    <p className='feature__text'>
                        We offer intensive caretaker services and property
                        management such as rental, inspection maintenance and
                        property valuation. We act as middle men between
                        property owners and property users. We use KYC property
                        management model in selecting and relating to our
                        clients owners/users. We can help you fast track the
                        acquisition of C of F and other relevant property
                        documents.
                    </p>
                </div>
            </section>{' '}
        </>
    )
}

export default PropertyManagement
