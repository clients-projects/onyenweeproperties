import { Link } from 'react-router-dom'

import RealEstate1 from '../assets/realEstate/RealEstate5.jpg'

import { ImEnter, ImExit } from 'react-icons/im'
import { AiFillHourglass } from 'react-icons/ai'

const Home = () => {
    const bgImg = {
        backgroundImage: `linear-gradient(to bottom, rgb(191, 191, 191) 20%, rgba(16, 29, 44, 0.98)), url(${RealEstate1})`,
    }

    return (
        <>
            <header className='heropages' style={bgImg}>
                <div className='heropages__1'>
                    <h3 className='heading-3'>Property Management:</h3>
                    <h1 className='heading-1'>Lets Manage Your Properties</h1>
                </div>
            </header>{' '}
            <div className='whoWeAre'>
                <h2 className='heading-1 heading-2--dark whoWeAre__title'>
                    Onyenwee Properties
                </h2>
                <p className='whoWeAre__text'>
                    We offer intensive caretaker services and property
                    management such as rental, inspection maintenance and
                    property valuation. We act as middle men between property
                    owners and property users. We use KYC property management
                    model in selecting and relating to our clients owners/users.
                    We can help you fast track the acquisition of C of O and
                    other relevant property documents.
                </p>
            </div>{' '}
            <section className='features'>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <ImEnter />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>BUY</h4>
                    <h4 className='feature__text' style={{ fontWeight: 700 }}>
                        THE EASY WAY TO BUY!
                    </h4>
                    <p className='feature__text'>
                        Look no further We are here to help! Just let us know
                        what you want, where you want it and we will get it for
                        you!
                    </p>
                </div>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <AiFillHourglass />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>RENT</h4>
                    <h4 className='feature__text' style={{ fontWeight: 700 }}>
                        GREAT APARTMENTS AT AFFORDABLE PRICES
                    </h4>
                    <p className='feature__text'>
                        Looking to rent and apartment of office building? We got
                        you covered. We have great offers for you. Please reach
                        out to us today!
                    </p>
                </div>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <ImExit />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>SELL</h4>
                    <h4 className='feature__text' style={{ fontWeight: 700 }}>
                        SELL WITH CONFIDENCE
                    </h4>
                    <p className='feature__text'>
                        Do you have properties to sell? We can handle it! Please
                        go and rest. We are professionals! That’s what we do
                        best!
                    </p>
                </div>
            </section>{' '}
            <div className='whoWeAre'>
                <h2 className='heading-1 heading-2--dark whoWeAre__title'>
                    Our Services
                </h2>
                <div className='whoWeAre__text'>
                    <h3>Property Management</h3>
                    <p>
                        We guarantee you a peace of mind by securing a high
                        quality tenants quickest return on property investment
                        diligent routine inspection and maintenance. We are
                        passionate when it comes to building your inflow, our
                        commission and the property users easy access and
                        testimonies contact us
                    </p>
                    <h3>I want to Sell</h3>
                    <p>
                        Selling of landed properties could be a challenging
                        experience for a property owner this is why you need us
                        At Onyenwee properties NIG LTD (mine), we understand the
                        emotional attachment of a property owner to a property
                        and the hard times one goes through while laying off a
                        property for delimer or for what is worth.
                    </p>
                    <h3>
                        {' '}
                        We Identify the following factors influence how a
                        property owner sells his/her property:{' '}
                    </h3>
                    <ul>
                        <li>
                            <h4>Emotions:</h4>
                            <p>An individual tags a property to a
                            problem this makes the owner vulnerable as the
                            potential purchaser would psychologically capitalize
                            on this weakness to bid down their price</p>
                        </li>
                    </ul>
                </div>
            </div>{' '}
        </>
    )
}

export default Home
