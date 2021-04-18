import { LastLocationType } from 'react-router-last-location'
import Footer from '../components/Footer'

interface LayoutProps {
    isAdmin: LastLocationType
    children: JSX.Element
}

function Layout(props: LayoutProps) {
  

let toRender = (
        <>
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
