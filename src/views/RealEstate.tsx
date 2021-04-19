import React from 'react'
import RealEstate1 from '../assets/realEstate/RealEstate1.jpg'
import Card from '../components/card'

import Features from '../components/Features'
import Hero from '../components/Hero'
import Homes from '../components/Homes'


const RealEstate = () => {
    return (
        // <div className='realEstate'>
        //     <img
        //         src={RealEstate1}
        //         alt='realEstate'
        //         className='realEstate_img'
        //     />
        //     <div className='realEstate__heading'>
        //         <h1 className='heading-1' style={{color: 'black'}}>Real Estate</h1>
        //         <p>Our exquisite homes</p>
        //     </div>

        //     <div className='card'>
        //         <Card/>
        //         <Card/>
        //         <Card/>
        //         <Card/>
        //     </div>
        // </div>
        <>
            <header className='hero' style={{backgroundImage:`${RealEstate1}` }}>
                <div className='hero__1'>
                    <h3 className='heading-3'>Your own home:</h3>
                    <h1 className='heading-1'>Exquisite Homes Just For You</h1>
                </div>
                <button className='btn hero__btn'>Contact Us Today</button>

            </header>
            <Features />
        </>
    )
}

export default RealEstate
