import React from 'react'
import { LastLocationType } from 'react-router-last-location'

// import { useLastLocation } from 'react-router-last-location'
import Footer from '../components/Footer'

interface LayoutProps {
    isAdmin: LastLocationType
    children: JSX.Element
}

function Layout(props: LayoutProps) {
    // const lastLocation = useLastLocation()
    // const history = useHistory()

    //let fromlocationPath = ''
    // for (let i in lastLocation) {
    //     if (i === 'pathname') {
    //         fromlocationPath = lastLocation[i]
    //     }
    // }
    //const fromLocationSplit = fromlocationPath.split(' ')

    //Check how this can be added to redux and called from there
    let toRender

    // const adminPath = props.isAdmin.pathname
    // let isAdmin = adminPath.includes('/admin')

    // if (isAdmin) {

    //     if(adminPath === '/admin' || adminPath === '/admin/'){
    //         history.push('/admin/dashboard')
    //     }

    //     toRender = props.children
    // } else {
    //     if (fromLocationSplit[0].includes('admin')) {
    //         window.location.reload()
    //     }
    //     toRender = (
    //         <>
    //             <div className='section-subHeader'>
    //                 <Header />
    //             </div>
    //             <main className='main'>{props.children}</main>
    //             <div className='section-footer'>
    //                 <Footer />
    //             </div>{' '}
    //         </>
    //     )
    // }

    toRender = (
        <>
            <main className='container' id='bodyId'>{props.children}</main>
            <div className='footer'>
                <Footer />
            </div>{' '}
        </>
    )

    return <>{toRender}</>
}

export default Layout
