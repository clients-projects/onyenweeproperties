import Logo from '../sass/img/logo.png'
import { Link } from 'react-router-dom'

import { useEffect } from 'react'
import Backdrop from './Backdrop'

const Header = () => {
    useEffect(() => {
        showNavBar(
            'sidebar-toggle',
            'nav-bar',
            'bodyId',
            'sidebar',
            'header-body',
            'header-logo',
            'backdrop'
        )
    }, [])

    const showNavBar = (
        toggleId: string,
        navId: string,
        bodyId: string,
        sidebarId: string,
        headerId: string,
        logoId: string,
        backdropId: string
    ) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodySelector = document.getElementById(bodyId),
            sidebar = document.getElementById(sidebarId),
            header = document.getElementById(headerId),
            logo = document.getElementById(logoId),
            getBackdrop = document.getElementById(backdropId)


        if (toggle && nav && bodySelector && sidebar && header) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show')
                toggle.classList.toggle('bx-x')
                bodySelector.classList.toggle('bodyId')
                sidebar.classList.toggle('bodyId')
                sidebar.classList.toggle('toggleMenu')
                sidebar.classList.toggle('toggleColor')
                logo!.classList.toggle('toggleLogo')
                getBackdrop!.classList.toggle('toggleBackdrop')

            })
        }
    }

    return (
        <>
            <section className='sidebar' id='sidebar'>
                <div className='sidebar__toggle'>
                    <i className='bx bx-menu' id='sidebar-toggle'></i>
                </div>

        <Backdrop>
                <div className='navbar1' id='nav-bar'>
                    <nav className='nav'>
                        <div>
                            {/* <Link to='/' className='nav__logo'>
                                <i className='bx bx-layer nav__logo-icon'></i>
                                <span className='nav__logo-name'>Onyewee</span>
                            </Link> */}

                            <div className='nav__list'>
                                <Link to='/' className='nav__link'>
                                    <i className='bx bx-layer nav__logo-icon'></i>

                                    <span className='nav__logo-name'>Home</span>
                                </Link>
                                <Link to='/' className='nav__link'>
                                    <i className='bx bxs-home-smile'></i>
                                    <span className='nav__logo-name'>
                                        Real Estate
                                    </span>
                                </Link>
                                <Link to='/' className='nav__link'>
                                    <i className='bx bxs-city'></i>
                                    <span className='nav__logo-name'>
                                        Property Management
                                    </span>
                                </Link>
                                <Link to='/' className='nav__link'>
                                    <i className='bx bxs-traffic-cone'></i>
                                    <span className='nav__logo-name'>
                                        Construction
                                    </span>
                                </Link>
                                <Link to='/' className='nav__link'>
                                    <i className='bx bxs-florist'></i>{' '}
                                    <span className='nav__logo-name'>
                                        Interior
                                    </span>
                                </Link>
                                <Link to='/' className='nav__link'>
                                    <i className='bx bxs-chat'></i>{' '}
                                    <span className='nav__logo-name'>
                                        Contact Us
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </Backdrop>
            </section>
            <div className='header' id='header-body'>
                <img
                    src={Logo}
                    alt='logo'
                    className='header-logo'
                    id='header-logo'
                />

                <ul className='header-nav'>
                    <li>
                        <Link to='/' className='header-nav__item'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='header-nav__item'>
                            Real Estate
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='header-nav__item'>
                            Property Management
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='header-nav__item'>
                            Construction
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='header-nav__item'>
                            Interior
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='header-nav__item'>
                            Contact us
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
