import Logo from '../sass/img/logo.png'
import {Link} from 'react-router-dom'

const subHeader = () => {
    return (
        <div className='sidebar'>
            <img src={Logo} alt='logo' className='sidebar-logo' />
            <ul className='sidebar-nav'>
                <li>
                    <Link to='/'>Hello</Link>
                </li>
            </ul>
        </div>
    )
}

export default subHeader