import buy from '../assets/rent.png'
import rent from '../assets/rent1.png'
import selling from '../assets/buying.png'
import homeRepair from '../assets/homeRepair.png'

const EstateServices = () => {
    return (
        // <div className='whoWeAre'>
        //     <h2 className='heading-1 heading-2--dark whoWeAre__title'>
        //         Welcome to Onyenwee Properties
        //     </h2>
        //     <p className='whoWeAre__text'>
        //         Onyenwee properties NIG LTD ( Mine ) is a liability company
        //         licensed under the Nigeria corporate affairs commission to deal
        //         on business of real estate investment. We have our peculiarity
        //         on developed properties and agency services. We are a team of
        //         professionals with young vibrant and experienced sales men and
        //         women, property managers, valuers, architects, Surveyors,
        //         financial analysts and civil engineers. With over 30years
        //         experience and dominant in the real estate industry in the south
        //         Eastern region of the country we have our head office at Rufia
        //         Garuba Real Estate off Aroma junction Awka State Capital
        //         Anambara state. Our branch network extends beyond the region
        //         covering most parts of the country.
        //     </p>
        // </div>

        <div className='estateServices'>
            <div className='estateServices__item'>
                <img src={buy} alt='' />
                <h2>I want to Buy</h2>
                <p>
                    Onyenwee Properties have the knowledge and experience to
                    help you discover the perfect property
                </p>
            </div>
            <div className='estateServices__item'>
                <img src={rent} alt='' />
                <h2>I want to Rent</h2>
                <p>
                    We take the time to understand your rental requirements and
                    work with you to find the property that suits your needs.
                </p>
            </div>
            <div className='estateServices__item'>
                <img src={selling} alt='' />
                <h2>I want to Sell</h2>
                <p>
                    Our team apply their years of experience to help you achieve
                    the best possible return for your property within the
                    shortest timeframe.
                </p>
            </div>
            <div className='estateServices__item'>
                <img src={homeRepair} alt='' />
                <h2>Property Management</h2>
                <p>
                    We ensure peace of mind by securing high quality tenants and
                    the highest possible rent alongside diligent routine
                    inspections.
                </p>
            </div>
        </div>
    )
}

export default EstateServices
