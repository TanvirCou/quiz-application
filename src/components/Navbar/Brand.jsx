import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-bg.png';

const Brand = () => {
    return (
        <nav >
            <ul>
                <li >
                    <Link to="/" className='flex flex-row items-center pt-3 pl-6'>
                        <img src={logo} alt="" className="w-8"/>
                        <h3 className='font-bold ml-2'>Learn with Sumit</h3>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Brand;