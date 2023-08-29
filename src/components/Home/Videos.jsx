import Video from "./Video";

const Videos = () => {
    return (
        <div className="justify-center grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 p-12">
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
            <Video></Video>
        </div>
    );
};

export default Videos;