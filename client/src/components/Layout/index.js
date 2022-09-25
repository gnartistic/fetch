import { Outlet } from 'react-router-dom';
import './index.scss';
import Navbar from '../Navbar';


const Layout = () =>
{

    return <div className='App'>
        <Navbar />
        <div className='page'>
            <Outlet />
        </div>
    </div>
}

export default Layout;