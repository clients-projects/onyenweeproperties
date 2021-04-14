import Logo from '../sass/img/logo.png'


const subHeader = () => {
    return (
        <div className='sidebar'>
            <img src={Logo} alt="logo"/>
            <button className='nav-btn'></button>
        </div>
    )
}

export default subHeader