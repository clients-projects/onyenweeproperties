import RealEstate1 from '../assets/realEstate/RealEstate2.jpg'


const Card = () => {
    return (
        <>
            <div className='card__img'>
                <img src={RealEstate1} alt='card' className='card__img--item' />

                <h1 className='card__img--name'>Multi family house</h1>
                <h1 className='card__img--price'>N423,232</h1>
            </div>
        </>
    )
}

export default Card
