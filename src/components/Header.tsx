import LogoBBC from '../sass/img/logo-bbc.png'
import LogoForbes from '../sass/img/logo-forbes.png'
import LogoTechcrunch from '../sass/img/logo-techcrunch.png'
import LogoBi from '../sass/img/logo-bi.png'
import Logo from '../sass/img/logo.png'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'

const Header = () => {
    return (
         <header className="header">
        <img src={Logo} alt="Nexter logo" className="header__logo"/>
        <h3 className="heading-3">Your own home:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">View our properties</button>
        <div className="header__seenon-text">Follow us on</div>
        <div className="header__seenon-logos">
            <FaFacebook/>
            <FaInstagramSquare/>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
          
        </div>
    </header>
    )
}

export default Header