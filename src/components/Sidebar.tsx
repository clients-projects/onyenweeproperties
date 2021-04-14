import Logo from '../sass/img/logo.png'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <img src={Logo} alt='logo' className='sidebar-logo' />
            <ul className='sidebar-nav'>
                <li className='sidebar-nav__item'>
                    <Link to='/'>Hello</Link>
                </li>
                <li className='sidebar-nav__item'>
                    <Link to='/'>Hello</Link>
                </li>
                <li className='sidebar-nav__item'>
                    <Link to='/'>Hello</Link>
                </li>
                <li className='sidebar-nav__item'>
                    <Link to='/'>Hello</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar