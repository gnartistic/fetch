import Loader from 'react-loaders';
import Navbar from '../Navbar'
import Swiper from '../Swiper';

const bg = {
    width: '100%',
    height: '100%',
    background: '#fefefe'
}

const Home = () =>
{
    
    // const loggedIn = Auth.loggedIn();
    
    return (
        <>
            <div className='page'>
                <Navbar />
            <div className='container home-page' style={bg}>
                <Swiper/>
            </div>

                <Loader type="ball-pulse-sync" />
                </div>
        </>
    )
}


export default Home