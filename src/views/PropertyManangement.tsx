import Features from '../components/Features'


const Home = () => {
    return (
        <>
            <header className='hero'>
                <div className='hero__1'>
                    <h3 className='heading-3'>Your own home:</h3>
                    <h1 className='heading-1'>Exquisite Homes Just For You</h1>
                </div>
                <button className='btn hero__btn'>Contact Us Today</button>
            </header>{' '}
            <div className='whoWeAre'>
                <h2 className='heading-1 heading-2--dark whoWeAre__title'>
                    Welcome to Onyenwee Properties
                </h2>
                <p className='whoWeAre__text'>
                    Onyenwee Properties is a Real Estate and property Management
                    Company located in Awka, Nigeria. We have our operations
                    within the South-Eastern part of Nigeria. We are a team of
                    young and vibrant individuals driven with the goal to
                    provide fantastic realty and property management services
                    and satisfaction to our esteemed customers. We are poised to
                    give best in class realty services, property management,
                    construction and interior services. With solid partnerships
                    built over the years, there is no doubt that we are able to
                    help you succeed in buying or selling properties any where
                    around the south eastern part of Nigeria!
                </p>
            </div>{' '}
            <section className='features'>
                <div className='feature'>
                    <figure className='feature__icon'>
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>
                        Best luxury homes
                    </h4>
                    <p className='feature__text'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Tenetur distinctio necessitatibus pariatur
                        voluptatibus.
                    </p>
                </div>
                <div className='feature'>
                    <figure className='feature__icon'>
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
                    </figure>
                    <h4 className='heading-4 heading-4--dark'>
                        All homes in top locations
                    </h4>
                    <p className='feature__text'>
                        Tenetur distinctio necessitatibus pariatur voluptatibus
                        quidem consequatur harum.
                    </p>
                </div>
            </section>{' '}
        </>
    )
}

export default Home
