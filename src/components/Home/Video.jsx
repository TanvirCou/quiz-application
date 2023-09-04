import image from '../../assets/images/3.jpg'


const Video = ({video}) => {

    return (
        <div>
            <div className='p-2 justify-center shadow-md bg-white rounded-md'>
                <img src={`http://img.youtube.com/vi/${video.youtubeID}/maxresdefault.jpg`} alt="" className='w-68 sm:flex-shrink-0'/>
                <p className='pt-2 font-semibold leading-5'>{video.title}</p>
                <div className='flex justify-between mt-3 pb-3 text-gray-500 text-sm'>
                <p>{video.noq} Questions</p>
                <p>Total points: {video.noq * 5}</p>
                </div>
            </div>
        </div>
    );
};

export default Video;