import { Link } from "react-router-dom";
import Video from "./Video";
import useVideoList from "../../Hooks/useVideoList";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Videos = () => {
    const [page, setPage] = useState(1);
    const { videos, loading, error, hasMore } = useVideoList(page);

    return (
        <div >
            { videos.length > 0 &&
                (<InfiniteScroll dataLength={videos.length} hasMore={hasMore} next={()=>setPage(page + 8)}>
                    <div className="justify-center grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 p-12">
                        {videos.map(video => 
                            video.noq > 0 ? (<Link to={`/quiz/${video.youtubeID}`} state={{videoTitle: video.title}} key={video.youtubeID}><Video video={video}></Video></Link>) :
                            (<Video key={video.youtubeID} video={video}></Video>)
                        )}
                    </div>
                </InfiniteScroll>)
            }
            {!loading && videos.length === 0 && (<div>No data found</div>)}
            {loading && (<div>Loading....</div>)}
            {error && (<div>There is an error</div>)}
            
        </div>
    );
};

export default Videos;