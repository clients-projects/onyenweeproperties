import React from 'react'
import {
    Switch,
    Route,
    Redirect,
    useLocation
} from 'react-router-dom'
// import { connect } from 'react-redux'
 import Layout from './Layout'
import Home from '../views/Home'
import { LastLocationType } from 'react-router-last-location'



function App() {
   const location: LastLocationType = useLocation()

  
    let AuthGuard = (
        <Switch>
            <Route
                path='/'
                exact
                component={Home}
                render={Home}
            />
        

            <Route path='/about-us' component={AboutUs} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/faq' component={Faq} />
            <Route path='/terms' component={Terms} />
            <Redirect to='/' />
        </Switch>
    )
   

    return (
        <div className='rootApp'>
             <Layout isAdmin={location}>
                {AuthGuard}
            </Layout>
        </div>
    )
}


export default App