import Loader from 'react-loaders';
import Navbar from '../Navbar'
// import Slider from './Slider';
import Auth from '../../utils/auth';

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
                {/* <Slider /> */}
            </div>

                <Loader type="ball-pulse-sync" />
                </div>
        </>
    )
}


export default Home