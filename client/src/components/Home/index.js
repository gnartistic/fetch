import Loader from 'react-loaders';
import Navbar from '../Navbar'
import Slider from './Slider';

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
                <Slider />
            </div>

            <Loader type="ball-pulse-sync" />
        </>
    )
}


export default Home