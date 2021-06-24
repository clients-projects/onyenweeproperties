import Story1 from '../sass/img/story-1.jpeg'
import Story2 from '../sass/img/story-2.jpeg'

const Story = () => {
    return (
        <div className='story'>
            <div className='story__pictures'>
                <img
                    src={Story1}
                    alt='Couple with a new house'
                    className='story__img--1'
                />
                <img src={Story2} alt='New house' className='story__img--2' />
            </div>
            <div className='story__content'>
                <h2 className='heading-2 heading-2--dark mb-md'>Vision</h2>
                <p className='story__text'>
                    Development of basic amenities, infrastructure and human
                    resources through public and private finance and investment
                    on real properties.
                </p>
                <h2 className='heading-2 heading-2--dark mb-md'>Mission and Objectives</h2>
                <ul className='story__text'>
                    <li>
                        Onyenwee nkagha 'Mine' is a peculiar slogan within the
                        southeastern Nigeria. It is about wealth creation,
                        family, more especially property acquisition, exclusion
                        and individualism
                    </li>
                    <li>
                        Marketing of the south Eastern Nigeria states by
                        exploring it's peculilities for both local and
                        international investors in basic amenities,
                        infrastructures and human resources department within
                        the region
                    </li>
                    <li>
                        Promoting Cordial cohabitation to every Nigerian
                        desiring to own earn a living within the region
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Story
