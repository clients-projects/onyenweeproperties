import Features from '../components/Features'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Homes from '../components/Homes'
import Realtors from '../components/Realtors'
import Story from '../components/Story'
import Sidebar from '../components/Sidebar'

const Home = () => {
    return (
        <>
            <Sidebar />
            <Header />
            <Realtors />
            <Features />
            <Story />
            <Homes />
            <Gallery />
        </>
    )
}

export default Home
