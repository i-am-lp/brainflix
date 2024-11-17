import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import { fetchVideos, fetchVideoById } from "../../utils/apirequests";
import '../VideoPlayer/videoplayer.scss';


function VideoDetails() {
    const { id } = useParams(); 
    const [video, setVideo] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
              const videos = await fetchVideos();
              let videoId = id;
   
              if (!id && videos.length > 0) {
                videoId = videos[0].id;
                // return;
              } 
              if (videoId) {
                // Fetch full details for the video
                const videoDetails = await fetchVideoById(videoId);
                setVideo(videoDetails);
              }else {
                const videoDetails = await fetchVideoById(id);
                setVideo(videoDetails);
              }
            } catch (error) {
              console.error('Error fetching video:', error);
            }
          };
      
          fetchData();
        }, [id]);

    if (!video) {
        return <div>Loading...</div>; 
    }

    const numberOfComments = video.comments ? video.comments.length : 0;
    const date = video.timestamp ? new Date(video.timestamp) : null;
    const formattedDate = date ? format(date, 'MM/dd/yyyy') : '';

    return (
        <section>
            <div className="video-player__details">
                <h1 className="video-player__details--title">{video.title}</h1>
                <div className="video-player__details--grouped">
                    <div className="video-player__details--grouped--a">
                        <p className="video-player__details--channel">By {video.channel}</p>
                        <p className="video-player__details--grouped--date">{formattedDate}</p>
                    </div>
                    <div className="video-player__details--grouped--b">
                        <p className="video-player__details--views"> 
                            <img src="../../src/assets/Icons/views.svg" alt="Views icon" /> 
                            {video.views}
                        </p>
                        <p className="video-player__details--likes">
                            <img src="../../src/assets/Icons/likes.svg" alt="Likes icon" />
                            {video.likes}
                        </p>
                    </div>
                </div>
            </div>
            <div className="video-player__description">
                <p>{video.description}</p>
            </div>
            <p className="video-player__comment-count">
                {numberOfComments} {numberOfComments === 1 ? 'comment' : 'comments'}
            </p>
        </section>
    );
}

export default VideoDetails;