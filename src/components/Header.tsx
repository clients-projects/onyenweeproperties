import Logo from '../sass/img/logo.png'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import Backdrop from './toggleNav/Backdrop'

const Header = () => {
    const [closeNavBar, setCloseNavBar] = useState(false)

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
            console.log('nav bar')
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

    const handleNavClose = () => {
        setCloseNavBar(true)
        const toggle = document.getElementById('sidebar-toggle'),
            nav = document.getElementById('nav-bar'),
            bodySelector = document.getElementById('bodyId'),
            sidebar = document.getElementById('sidebar'),
            header = document.getElementById('header-body'),
            logo = document.getElementById('header-logo'),
            getBackdrop = document.getElementById('backdrop')

        if (toggle && nav && bodySelector && sidebar && header) {
                console.log('to close nav')

                nav.classList.remove('show')
                toggle.classList.remove('bx-x')
                bodySelector.classList.remove('bodyId')
                sidebar.classList.remove('bodyId')
                sidebar.classList.remove('toggleMenu')
                sidebar.classList.remove('toggleColor')
                logo!.classList.remove('toggleLogo')
                getBackdrop!.classList.remove('toggleBackdrop')

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
                                <div className='nav__list'>
                                    <Link to='/' className='nav__link'>
                                        <i className='bx bx-layer nav__logo-icon'></i>

                                        <span className='nav__logo-name'>
                                            Home
                                        </span>
                                    </Link>
                                    <Link
                                        to='/real-estate'
                                        className='nav__link'
                                    >
                                        <i className='bx bxs-home-smile'></i>
                                        <span className='nav__logo-name'>
                                            Real Estate
                                        </span>
                                    </Link>
                                    <Link
                                        to='/property-management'
                                        className='nav__link'
                                        onClick={handleNavClose}
                                    >
                                        <i className='bx bxs-city'></i>
                                        <span className='nav__logo-name'>
                                            Property Management
                                        </span>
                                    </Link>
                                    <Link
                                        to='/construction'
                                        className='nav__link'
                                    >
                                        <i className='bx bxs-traffic-cone'></i>
                                        <span className='nav__logo-name'>
                                            Construction
                                        </span>
                                    </Link>
                                    <Link to='/interior' className='nav__link'>
                                        <i className='bx bxs-florist'></i>{' '}
                                        <span className='nav__logo-name'>
                                            Interior
                                        </span>
                                    </Link>
                                    <Link
                                        to='/contact-us'
                                        className='nav__link'
                                    >
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
                        <Link to='/real-estate' className='header-nav__item'>
                            Real Estate
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/property-management'
                            className='header-nav__item'
                        >
                            Property Management
                        </Link>
                    </li>
                    <li>
                        <Link to='/construction' className='header-nav__item'>
                            Construction
                        </Link>
                    </li>
                    <li>
                        <Link to='/interior' className='header-nav__item'>
                            Interior
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact-us' className='header-nav__item'>
                            Contact us
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header
