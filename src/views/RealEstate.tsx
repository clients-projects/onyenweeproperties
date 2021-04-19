import React from 'react'
import RealEstate1 from '../assets/realEstate/RealEstate1.jpg'

import Features from '../components/Features'


const RealEstate = () => {


    const bgImg = {
        backgroundImage: `linear-gradient(to top, rgba(16, 29, 44, 0.8), rgba(16, 29, 44, 0.98)), url(${RealEstate1})`,
    }
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
            <header className='hero' style={bgImg}>
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
