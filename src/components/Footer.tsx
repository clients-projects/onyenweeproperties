const Footer = () => {
    const date = new Date()

    const yearDisplay:number = date.getFullYear()

    return (
        <footer>
            {/* <ul className='nav'>
                <li className='nav__item'>
                    <a href='#' className='nav__link'>
                        Find your dream home
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='#' className='nav__link'>
                        Request a proposal
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='#' className='nav__link'>
                        Download your home planner
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='#' className='nav__link'>
                        Contact us
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='#' className='nav__link'>
                        Submit your property
                    </a>
                </li>
                <li className='nav__item'>
                    <a href='#' className='nav__link'>
                        Come work with us
                    </a>
                </li>
            </ul> */}
            <p className='copyright'>
                &copy;Copyright {yearDisplay} &mdash; Onyewee Property
            </p>
        </footer>
    )
}

export default Footer
