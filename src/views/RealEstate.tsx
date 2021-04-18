import RealEstate1 from '../assets/realEstate/RealEstate1.jpg'

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
        </div>
    )
}

export default RealEstate