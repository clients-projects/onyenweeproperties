import { Link } from 'react-router-dom'
import RealEstate1 from '../assets/realEstate/RealEstate1.jpg'

import { FaLongArrowAltRight } from 'react-icons/fa'
import { MdLandscape } from 'react-icons/md'
import { FaWarehouse } from 'react-icons/fa'
import { SiBandsintown } from 'react-icons/si'
import { AiTwotoneMoneyCollect } from 'react-icons/ai'

const RealEstate = () => {
    const bgImg = {
        backgroundImage: `linear-gradient(to bottom, rgb(191, 191, 191) 20%, rgba(16, 29, 44, 0.4)), url(${RealEstate1})`,
    }

    return (
        <>
            <header className='heropages' style={bgImg}>
                <div className='heropages__1'>
                    <h3 className='heading-3'>Real Estate:</h3>
                    <h1 className='heading-1'>Our Real Estate Services</h1>
                </div>
            </header>
            <div className='whoWeAre'>
                <h2 className='heading-1 heading-2--dark whoWeAre__title'>
                    Real Estate
                </h2>
                <p className='whoWeAre__text' style={{ textAlign: 'center' }}>
                    Land survey and lodgments, selling of lands, town planning
                </p>
            </div>{' '}
            <section className='features1'>
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
                        <AiTwotoneMoneyCollect />
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
            <div className='btnBox'>
                <Link className='btn btn1' to='contact-us'>
                    Talk To Us Now{' '}
                    <span>
                        <FaLongArrowAltRight />
                    </span>
                </Link>
            </div>
        </>
    )
}

export default RealEstate
