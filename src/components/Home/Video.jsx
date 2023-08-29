import image from '../../assets/images/3.jpg'

const Video = () => {
    return (
        <div>
            <a href="/">
                <div className='p-2 justify-center shadow-md bg-white rounded-md'>
                    <img src={image} alt="" className='w-68 sm:flex-shrink-0'/>
                    <p className='pt-2 font-semibold leading-5'>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                    <div className='flex justify-between mt-3 pb-3 text-gray-500 text-sm'>
                    <p>10 Questions</p>
                    <p>Score : 10 / 10</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Video;