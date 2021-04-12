import LogoBBC from '../sass/img/logo-bbc.png'
import LogoForbes from '../sass/img/logo-forbes.png'
import LogoTechcrunch from '../sass/img/logo-techcrunch.png'
import LogoBi from '../sass/img/logo-bi.png'

const Header = () => {
    return (
         <header className="header">
        <img src="img/logo.png" alt="Nexter logo" className="header__logo"/>
        <h3 className="heading-3">Your own home:</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">View our properties</button>
        <div className="header__seenon-text">As seen on</div>
        <div className="header__seenon-logos">
            <img src={LogoBBC} alt="Seen on 1"/>
            <img src={LogoForbes} alt="Seen on 2"/>
            <img src={LogoTechcrunch} alt="Seen on 3"/>
            <img src={LogoBi} alt="Seen on 4"/>
        </div>
    </header>
    )
}

export default Header