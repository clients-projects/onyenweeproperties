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
                    We offer intensive caretaker services and property
                    management such as rental, inspection maintenance and
                    property valuation. We act as middle men between property
                    owners and property users. We use KYC property management
                    model in selecting and relating to our clients owners/users.
                    We can help you fast track the acquisition of C of F and
                    other relevant property documents.
                </p>
            </div>{' '}
            <section className='features'>
                <div className='feature'>
                    <figure className='feature__icon'></figure>
                    <h4 className='heading-4 heading-4--dark'>BUY</h4>
                    
                    <p className='feature__text'>
                        Look no further We are here
                        to help! Just let us know what you want, where you want
                        it and we will get it for you!
                    </p>
                </div>
                <div className='feature'>
                    <figure className='feature__icon'></figure>
                    <h4 className='heading-4 heading-4--dark'>
                        Only the best properties
                    </h4>
                    <p className='feature__text'>
                        Voluptatum mollitia quae. Vero ipsum sapiente molestias
                        accusamus rerum sed a eligendi aut quia.
                    </p>
                </div>
                <div className='feature'>
                    <figure className='feature__icon'></figure>
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
