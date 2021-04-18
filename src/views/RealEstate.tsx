import RealEstate1 from '../assets/realEstate/RealEstate1.jpg'
import Card from '../components/card'

const RealEstate = () => {
    return (
        <div className='realEstate'>
            <img
                src={RealEstate1}
                alt='realEstate'
                className='realEstate_img'
            />
            <div className='realEstate__heading'>
                <h1 className='heading-1' style={{color: 'black'}}>Real Estate</h1>
                <p>Our exquisite homes</p>
            </div>

            <div className='card'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default RealEstate