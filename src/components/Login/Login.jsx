import loginImage from '../../assets/images/login.svg'
import LoginForm from './LoginForm';

const Login = () => {
    return (
        <div className='bg-gray-100 px-12 py-6 h-screen'>
            <p className='text-2xl font-bold'>Login to your account</p>
            <div className='flex'>
                <div className='lg:w-1/2 lg:block md:hidden sm:hidden min-[320px]:hidden'>
                <img src={loginImage} alt="" className='w-2/3 pt-20 pl-8'/>
                </div>
                <div className='lg:w-1/2 md:w-full sm:w-full min-[320px]:w-full'>
                <LoginForm></LoginForm>
                </div>
            </div>
        </div>
    );
};

export default Login;