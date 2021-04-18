import './sass/main.scss'
import ReactDom from 'react-dom'


import App from './Containers/App'
import { LastLocationProvider } from 'react-router-last-location'
import { BrowserRouter } from 'react-router-dom'


const app = (    
        <BrowserRouter>
        <LastLocationProvider>
             <App/>
        </LastLocationProvider>
        </BrowserRouter>
)

ReactDom.render(app, document.querySelector('#root'))