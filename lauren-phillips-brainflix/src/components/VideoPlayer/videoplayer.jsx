import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchVideos, fetchVideoById } from '../../utils/apirequests';
import './videoplayer.scss';


function VideoPlayer() {
    const { id } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const videos = await fetchVideos();
              if (!id) {
                setVideo(videos[0]); 
              } else {
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

    return (
        <section className="video-player">
            <div className="video-player__container">
                <video
                    className="video-player__element"
                    controls
                    poster={video.image}
                    src={video.video}
                ></video>
            </div>
        </section>
    );
}

export default VideoPlayer;