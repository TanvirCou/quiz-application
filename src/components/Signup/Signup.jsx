
import Form from './Form';
import signupImage from '../../assets/images/signup.svg'

const Signup = () => {
    return (
        <div className='bg-gray-100 px-12 py-6 h-screen'>
            <p className='text-2xl font-bold'>Create an account</p>
            <div className='flex'>
                <div className='lg:w-1/2 lg:block md:hidden sm:hidden min-[320px]:hidden'>
                <img src={signupImage} alt="" className='w-2/3 pt-20 pl-8'/>
                </div>
                <div className='lg:w-1/2 md:w-full sm:w-full min-[320px]:w-full'>
                <Form></Form>
                </div>
            </div>
        </div>
    );
};

export default Signup;