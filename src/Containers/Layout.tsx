import { LastLocationType } from 'react-router-last-location'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface LayoutProps {
    isAdmin: LastLocationType
    children: JSX.Element
}

function Layout(props: LayoutProps) {
    let toRender = (
        <>
            <header>
                <Header />
            </header>
            <main className='container' id='bodyId'>
                {props.children}
            </main>
            <div className='footer'>
                <Footer />
            </div>{' '}
        </>
    )

    return <>{toRender}</>
}

export default Layout
