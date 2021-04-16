import Logo from '../sass/img/logo.png'
import { Link } from 'react-router-dom'

import { useEffect } from 'react'

const Sidebar = () => {
    useEffect(() => {
        showNavBar('sidebar-toggle', 'nav-bar', 'bodyId', 'sidebar')
    }, [])

    const showNavBar = (
        toggleId: string,
        navId: string,
        bodyId: string,
        headerId: string
    ) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodySelector = document.getElementById(bodyId),
            header = document.getElementById(headerId)


        if (toggle && nav && bodySelector && header) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show')
                toggle.classList.toggle('bx-x')
                bodySelector.classList.toggle('bodyId')
                header.classList.toggle('bodyId')
            })
        }
    }

    return (
        <>
            <section className='sidebar' id='sidebar'>
                <div className='sidebar__toggle'>
                    <i className='bx bx-menu' id='sidebar-toggle'></i>
                </div>
                
                <div className='navbar1' id='nav-bar'>
                    <nav className='nav'>
                        <div>
                            <Link to='/' className='nav__logo'>
                                <i className='bx bx-layer nav__logo-icon'></i>
                                <span className='nav__logo-name'>Onyewee</span>
                            </Link>

                            <div className='nav__list'>
                                <Link to='/' className='nav__link'>
                                    <i className='bx bx-layer nav__logo-icon'></i>
                                    <span className='nav__logo-name'>
                                        Collins
                                    </span>
                                </Link>
                                <Link to='/' className='nav__link'>
                                    <i className='bx bx-layer nav__logo-icon'></i>
                                    <span className='nav__logo-name'>Home</span>
                                </Link>
                                <Link to='/' className='nav__link'>
                                    <i className='bx bx-layer nav__logo-icon'></i>
                                    <span className='nav__logo-name'>
                                        Construction
                                    </span>
                                </Link>
                                <Link to='/' className='nav__link'>
                                    <i className='bx bx-layer nav__logo-icon'></i>
                                    <span className='nav__logo-name'>
                                        Buildings
                                    </span>
                                </Link>
                                <Link to='/' className='nav__link'>
                                    <i className='bx bx-layer nav__logo-icon'></i>
                                    <span className='nav__logo-name'>
                                        Interiors
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <div className='header'>
                <img src={Logo} alt='logo' className='header-logo' />

                <label htmlFor='check'>
                    <input type='checkbox' id='check' />
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

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

export default Sidebar
