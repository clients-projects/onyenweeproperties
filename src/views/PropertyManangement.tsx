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
                <p className='whoWeAre__text'>
                    We guarantee you a peace of mind by securing a high quality
                    tenants quickest return on property investment diligent
                    routine inspection and maintenance. We are passionate when
                    it comes to building your inflow, our commission and the
                    property users easy access and testimonies contact us
                </p>
            </div>{' '}
            {/* <section className='features'>
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
            </section>{' '} */}
            <div className='services'>
                {/* <h2 className='heading-1 heading-2--dark services__title'>
                    Our Services
                </h2> */}
                <div className='services__text'>
                    {/* <details open>
                        <summary>Property Management</summary>
                        <p>
                            We guarantee you a peace of mind by securing a high
                            quality tenants quickest return on property
                            investment diligent routine inspection and
                            maintenance. We are passionate when it comes to
                            building your inflow, our commission and the
                            property users easy access and testimonies contact
                            us
                        </p>
                    </details> */}
                    <figure className='feature__icon'>
                        <ImEnter />
                    </figure>
                    <h3>I want to Sell</h3>
                    <p>
                        Selling of landed properties could be a challenging
                        experience for a property owner this is why you need us
                        At Onyenwee properties NIG LTD (mine), we understand the
                        emotional attachment of a property owner to a property
                        and the hard times one goes through while laying off a
                        property for delimer or for what is worth.
                    </p>
                    <h4>
                        {' '}
                        We Identify the following factors influence how a
                        property owner sells his/her property:{' '}
                    </h4>
                    <ul>
                        <li>
                            <h5>Emotions:</h5>
                            <p>
                                An individual tags a property to a problem this
                                makes the owner vulnerable as the potential
                                purchaser would psychologically capitalize on
                                this weakness to bid down their price
                            </p>
                        </li>
                        <li>
                            <h5>Marketing Avenue:</h5>
                            <p>
                                Specific goods and services are better
                                appreciated valued and sort for at the right
                                market one of the biggest challenges for an
                                individuals aiming to sell a property at a full
                                value is not knowing the right market thereby
                                left with no option than laying off the property
                                at a random market on an intimidation low price
                            </p>
                        </li>
                        <li>
                            <h5>Price Bidding Mechanism:</h5>
                            <p>
                                A property purchaser will always bid low while
                                dealing with an individuals believing you would
                                lay off the property once his bid matches your
                                emotions
                            </p>
                        </li>
                    </ul>
                    <h3>Why We Should Help You Sell</h3>
                    <p>
                        We sidelines emotions and your property also got
                        appraisal off our good will. Onyenwee properties NIG LTD
                        is a big name in the property industry within the south
                        Eastern part of the country. This is what we've been
                        known for over 30years still waxing stronger.
                    </p>
                    <h4>
                        {' '}
                        We Identify the following factors influence how a
                        property owner sells his/her property:{' '}
                    </h4>
                    <ul>
                        <li>
                            <h5>Marketing Avenue:</h5>
                            <p>
                                Onyenwee properties for over 30 years of
                                dominant in property industry southeastern
                                Nigeria is fast becoming a house hold name and
                                number one choice for real estate developers
                                within the country. We have our marketing agents
                                on and around every Conner within the region. We
                                also make use of social and conversational media
                                ie newspaper's magazines, radio stations as a
                                medium of reach out to the public
                            </p>
                        </li>
                        <li>
                            <h5>Price Bidding Mechanism:</h5>
                            <p>
                                Property pricing can never be a talent rather a
                                combination of the sellers position, long time
                                experience and also the understanding of the
                                present and future economic value of a property.
                                Our team of sales experts are there for you
                                contact us for cool price, cool commission cool
                                ownership and sense of accomplishment via the
                                purchaser and everything one goes home happy
                            </p>
                        </li>
                    </ul>
                    <h3>I want to Buy</h3>
                    <p>
                        Buying a landed property could the a challenging
                        experience for a prospective purchaser the following are
                        factors to consider and why you need our assistance in
                        this regards: The authenticity of the property Valid
                        documents and property value For more enquiry contact us
                    </p>
                    <h3>I want to Rent</h3>
                    <p>
                        There are a lot of challenges when it comes to renting a
                        conducive apartment but with Onyenwee properties
                        managers you could go way RENT MADE EASY For enquiry on
                        both landlords and tenants guild book, contact us Space
                        for available properties for sell and for rent.
                    </p>
                    <h3>Real Estate</h3>
                    <p>
                        Land survey and lodgments, selling of lands, town
                        planning
                    </p>
                    <h3>Construction</h3>
                    <p>
                        we have an team of certified skills architects and
                        structural engineer young experience and innovative mind
                        that knows what taste is all about when it's comes to
                        for private, commercial and public uses.
                    </p>
                    <h3>Interior design and furnishing equipment:</h3>
                    <p>
                        Contact us for your office furniture and interior we are
                        into sales and purchase of furniture, toiletries,
                        electronics appliances and house hold equipment whole
                        sale supply hotels and public centers.
                    </p>
                </div>
            </div>{' '}
        </>
    )
}

export default Home
