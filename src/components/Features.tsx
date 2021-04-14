import {GrMapLocation} from 'react-icons/gr'
import { GiVikingLonghouse, GiLaurelsTrophy } from 'react-icons/gi'

const Features = () => {
    return (
        <section className='features'>
            <div className='feature'>
                <figure className='feature__icon'>
                    <GiVikingLonghouse />
                </figure>
                <h4 className='heading-4 heading-4--dark'>
                    Best luxury homes
                </h4>
                <p className='feature__text'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur distinctio necessitatibus pariatur voluptatibus.
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
                    Voluptatum mollitia quae. Vero ipsum sapiente molestias
                    accusamus rerum sed a eligendi aut quia.
                </p>
            </div>
            <div className='feature'>
                <figure className='feature__icon'>
                    {/* <use xlinkHref="img/sprite.svg#icon-map-pin"></use> */}
                    <GrMapLocation />
                </figure>
                <h4 className='heading-4 heading-4--dark'>
                    All homes in top locations
                </h4>
                <p className='feature__text'>
                    Tenetur distinctio necessitatibus pariatur voluptatibus
                    quidem consequatur harum.
                </p>
            </div>
        </section>
    )
}

export default Features