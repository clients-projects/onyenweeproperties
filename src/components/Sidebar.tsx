import Logo from '../sass/img/logo.png'
import { Link } from 'react-router-dom'

import { useEffect } from 'react'

const Sidebar = () => {
    useEffect(() => {
        showNavBar('header-toggle', 'nav-bar', 'bodyId', 'header')

        const linkColor = document.querySelectorAll('.nav__link')

        console.log('link color1', linkColor)

        const colorLink = () => {
            if (linkColor) {
                linkColor.forEach((i) => i.classList.remove('active'))

                console.log('link color', linkColor)
                // this!.classList.add('active')
            }
        }
        linkColor.forEach((i) => i.addEventListener('click', colorLink))
    }, [])

    const showNavBar = (
        toggleId: string,
        navId: string,
        bodyId: string,
        headerId: string
    ) => {
        console.log('loaded')
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodySelector = document.getElementById(bodyId),
            header = document.getElementById(headerId)

        console.log('the toggles', toggle, nav)

        if (toggle && nav && bodySelector && header) {
            toggle.addEventListener('click', () => {
                console.log('clicked toggle')
                nav.classList.toggle('show')
                bodySelector.classList.toggle('bodyId')
                header.classList.toggle('bodyI')
            })
        }
    }

    return (
        <>
            <header className='header' id='header'>
                <div className='header__toggle'>
                    <i className='bx bx-menu' id='header-toggle'></i>
                </div>
                <div className='header__img'>
                    <img src={Logo} alt='logo' />
                </div>
                <div className='navbar1' id='nav-bar'>
                    <nav className='nav'>
                        <div>
                            <Link to='/' className='nav__logo'>
                                <i className='bx bx-layer nav__logo-icon'></i>
                                <span className='nav__logo-name'>Onyewee</span>
                            </Link>

                            <div className='nav__list'>
                                <Link to='/' className='nav__link active'>
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
            </header>
            {/* <div className='sidebar'>
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


        </div> */}
        </>
    )
}

export default Sidebar
