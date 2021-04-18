import RealEstate1 from '../assets/realEstate/RealEstate1.jpg'


const Card = () => {
    return (
        <div className='card'>
            <div className='card__img'>
                <img
                    src={RealEstate1}
                    alt='realEstate'
                    className='realEstate_img'
                />
            </div>
            This is the card
        </div>
    )
}

export default Card
