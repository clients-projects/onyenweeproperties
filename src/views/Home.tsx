import Features from '../components/Features'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Homes from '../components/Homes'
import Realtors from '../components/Realtors'
import Story from '../components/Story'
import SubHeader from '../components/subHeader'

const Home = () => {
    return (
        <>
            <SubHeader />
            <Header />
            <Realtors />
            <Features />
            <Story />
            <Homes />
            <Gallery />
            <Footer />
        </>
    )
}

export default Home
