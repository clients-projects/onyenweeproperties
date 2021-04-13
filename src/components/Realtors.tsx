import Realtor2 from '../sass/img/realtor-2.jpeg'
import Realtor3 from '../sass/img/realtor-3.jpeg'
import Realtor1 from '../sass/img/gal-2.jpeg'


const Realtors = () => {
    return (
        <div className='realtors'>
            <h3 className='heading-3'>Top Houses</h3>
            <div className='realtors__list'>
                <img src={Realtor1} alt='Realtor 1' className='realtors__img' />
                <div className='realtors__details'>
                    <h4 className='heading-4 heading-4--light'>
                        Residential buildings
                    </h4>
                    <p className='realtors__sold'>245 houses sold</p>
                </div>
                <img src={Realtor2} alt='Realtor 2' className='realtors__img' />
                <div className='realtors__details'>
                    <h4 className='heading-4 heading-4--light'>
                        Commericial Buildings
                    </h4>
                    <p className='realtors__sold'>212 houses sold</p>
                </div>
                <img src={Realtor3} alt='Realtor 3' className='realtors__img' />
                <div className='realtors__details'>
                    <h4 className='heading-4 heading-4--light'>
                        Infrastructures
                    </h4>
                    <p className='realtors__sold'>198 houses sold</p>
                </div>
            </div>
        </div>
    )
}

export default Realtors
