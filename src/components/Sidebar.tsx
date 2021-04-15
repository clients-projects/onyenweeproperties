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
                    <i className='bx bx-menu' id='header-toggle'></i>
                </div>
                <div className='header__img'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='1-navbar' id='nav-bar'>
                    <nav className='nav'>
                        <div>
                            <Link to='/' className='nav__logo'>
                                <i className='bx bx-layer nav__logo-icon'></i>
                                <span className='nav__logo-name'>
                                    Bedimcode
                                </span>
                            </Link>

                            <div className='nav__list'>
                                <Link to='/' className='nav__logo'>
                                    <i className='bx bx-layer nav__logo-icon'></i>
                                    <span className='nav__logo-name'>
                                        Collins
                                    </span>
                                </Link>
                                <Link to='/' className='nav__logo'>
                                    <i className='bx bx-layer nav__logo-icon'></i>
                                    <span className='nav__logo-name'>
                                        Bedimcode
                                    </span>
                                </Link>
                                <Link to='/' className='nav__logo'>
                                    <i className='bx bx-layer nav__logo-icon'></i>
                                    <span className='nav__logo-name'>
                                        Bedimcode
                                    </span>
                                </Link>
                                <Link to='/' className='nav__logo'>
                                    <i className='bx bx-layer nav__logo-icon'></i>
                                    <span className='nav__logo-name'>
                                        Bedimcode
                                    </span>
                                </Link>
                                <Link to='/' className='nav__logo'>
                                    <i className='bx bx-layer nav__logo-icon'></i>
                                    <span className='nav__logo-name'>
                                        Bedimcode
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Sidebar
