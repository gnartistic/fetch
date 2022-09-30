import Loader from 'react-loaders';
import Navbar from '../Navbar'

const bg = {
    width: '100%',
    height: '100%',
    background: '#fefefe'
}

const Home = () =>
{
    return (
        <>
            <div className='container home-page' style={bg}>
<<<<<<< HEAD
                <Navbar/>
=======
        <Navbar/>
>>>>>>> 8fff8941df7eefc4f3a4e234f9bb5700f101fb52
            </div>
            
            <Loader type="ball-pulse-sync" />
            </>
    )
}

export default Home