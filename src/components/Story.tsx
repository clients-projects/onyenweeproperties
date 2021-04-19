import Story1 from '../sass/img/story-1.jpeg'
import Story2 from '../sass/img/story-2.jpeg'

const Story = () => {
    return (
        <>
            <div className='story__pictures'>
                <img
                    src={Story1}
                    alt='Couple with a new house'
                    className='story__img--1'
                />
                <img src={Story2} alt='New house' className='story__img--2' />
            </div>
            <div className='story__content'>
                <h2 className='heading-2 heading-2--dark mb-md'>
                Vision
                </h2>
                <p className='story__text'>
                    To become the leading Real Estate and Property Management
                    firm in the whole of South East, Nigeria and Africa at
                    large.
                </p>
                <h2 className='heading-2 heading-2--dark mb-md'>
                    Mission
                </h2>
                <p className='story__text'>
                    Creating a positive change in the real estate and property
                    management space in the South Eastern Nigeria by exploring
                    its peculialities for both local and international investors
                    in basic amenities infrastructure and human resources
                    development.
                </p>
            </div>
        </>
    )
}

export default Story
