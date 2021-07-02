import {Link} from 'react-router-dom'
import Building1 from '../assets/realEstate/building1.jpg'

import { FaRoad } from 'react-icons/fa'
import {RiBuilding3Fill} from 'react-icons/ri'

const Construction = () => {
    const bgImg = {
        backgroundImage: `linear-gradient(to bottom, rgb(191, 191, 191) 20%, rgba(16, 29, 44, 0.4), rgba(16, 29, 44, 0.98)), url(${Building1})`,
    }
    return (
        <>
            <header className='heropages' style={bgImg}>
                <div className='heropages__1'>
                    <h3 className='heading-3'>construction:</h3>
                    <h1 className='heading-1'>
                        Lets Handle Your Constructions
                    </h1>
                </div>
            </header>
            <section className='features'>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <FaRoad />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>
                        Road Construction
                    </h4>
                    <p className='feature__text'>
                        we have an team of certified skills architects and
                        structural engineer young experience and innovative mind
                        that knows what taste is all about when it's comes to
                        for private, commercial and public uses.
                    </p>
                </div>
                <div className='feature'>
                    <figure className='feature__icon'>
                        <RiBuilding3Fill />
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>
                        Building Construction
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
