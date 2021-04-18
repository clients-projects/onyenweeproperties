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
import Construction from '../views/Construction'
import ContactUs from '../views/ContactUs'
import Interior from '../views/Interior'
import PropertyManagement from '../views/PropertyManangement'
import RealEstate from '../views/RealEstate'



function App() {
   const location: LastLocationType = useLocation()

  
    let AuthGuard = (
        <Switch>
            <Route path='/' exact component={Home} render={Home} />

            <Route path='/construction' component={Construction} />
            <Route path='/interior' component={Interior} />
            <Route path='/contact-us' component={ContactUs} />
            <Route path='/property-management' component={PropertyManagement} />
            <Route path='/real-estate' component={RealEstate} />
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