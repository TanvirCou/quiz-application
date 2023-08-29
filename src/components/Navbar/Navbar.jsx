import Account from './Account';
import Brand from './Brand';

const Navbar = () => {
    return (
        <div className='flex justify-between shadow-sm pb-3'>
            <Brand></Brand>
            <Account></Account>
        </div>
    );
};

export default Navbar;