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

            <header className='header' id='header'>
                <div className='header__toggle'>
                    <i class='bx bx-menu' id='header-toggle'></i>
                </div>
                <div className="header__img">
                    <img src={Logo} alt="logo"/>
                </div>
            </header>
        </div>
    )
}

export default Sidebar
