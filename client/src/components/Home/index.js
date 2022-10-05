import Loader from 'react-loaders';
import Navbar from '../Navbar'
import Swiper from '../Swiper';

const bg = {
    width: '100%',
    height: '100%',
    background: '#fefefe'
}

const Home = () => {
    return (
        <>
            <div className='container home-page' style={bg}>
                <Navbar />
                <Swiper />
            </div>

            <Loader type="ball-pulse-sync" />
        </>
    )
}


export default Home