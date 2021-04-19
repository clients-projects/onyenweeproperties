import RealEstate1 from '../assets/realEstate/RealEstate1.jpg'

import {MdLandscape} from 'react-icons/md'
import {FaWarehouse} from 'react-icons/fa'
import {SiBandsintown} from 'react-icons/si'
import {AiTwotoneMoneyCollect} from 'react-icons/ai'

const RealEstate = () => {
    const bgImg = {
        backgroundImage: `linear-gradient(to top, rgba(16, 29, 44, 0.8), rgba(16, 29, 44, 0.98)), url(${RealEstate1})`,
    }

    const customFeature = {
        gridTemplateColumns: ' repeat(auto-fit, minmax(40rem, 1fr))'
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
            <section className='features' style={customFeature}>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <MdLandscape />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>Land Survey</h4>
                    <p className='feature__text'>
                        We provide superior land survey services; helping you to
                        locate, describe, monument, and map the boundaries and
                        corners of a parcel of land.
                    </p>
                </div>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <FaWarehouse />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>
                        Property Evaluation
                    </h4>
                    <p className='feature__text'>
                        Estimating the value of your property could be an
                        arduous task. At Onyenwee Properties, we use both
                        traditional and advanced methods of property valuation
                        to give proper valuation of your property. We guarantee
                        that you get the best value for your property. Try us
                        today!
                    </p>
                </div>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <SiBandsintown />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>Town Planning</h4>
                    <p className='feature__text'>
                        We work with governments and estate owners in managing
                        land resources. This involves the control of existing
                        and new developments, as well as strategy preparation to
                        ensure manage future requirements. It is a dynamic
                        process that changes in response to policy, development
                        proposals and local needs.
                    </p>
                </div>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <AiTwotoneMoneyCollect/>
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>
                        Land Sale and Purchase
                    </h4>
                    <p className='feature__text'>
                        We serve as middle men, helping individuals and
                        corporate bodies purchase or sell land in seamless
                        manner. We help your source for the land at good prices
                        and also help the owners negotiate in order to get the
                        best prices for their lands.
                    </p>
                </div>
            </section>{' '}
        </>
    )
}

export default RealEstate
