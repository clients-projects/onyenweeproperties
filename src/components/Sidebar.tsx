import Logo from '../sass/img/logo.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <img src={Logo} alt='logo' className='sidebar-logo' />

            <label htmlFor='check'>
                <input type='checkbox' id='check' />
                <span></span>
                <span></span>
                <span></span>
            </label>

            <ul className='sidebar-mobile'>
                <li>Home mobile</li>
                <li>Home mobile</li>
                <li>Home mobile</li>
                <li>Home mobile</li>
            </ul>

            <ul className='sidebar-nav'>
                <li>
                    <Link to='/' className='sidebar-nav__item'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/' className='sidebar-nav__item'>
                        Real Estate
                    </Link>
                </li>
                <li>
                    <Link to='/' className='sidebar-nav__item'>
                        Property Management
                    </Link>
                </li>
                <li>
                    <Link to='/' className='sidebar-nav__item'>
                        Construction
                    </Link>
                </li>
                <li>
                    <Link to='/' className='sidebar-nav__item'>
                        Interior
                    </Link>
                </li>
                <li>
                    <Link to='/' className='sidebar-nav__item'>
                        Contact us
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
