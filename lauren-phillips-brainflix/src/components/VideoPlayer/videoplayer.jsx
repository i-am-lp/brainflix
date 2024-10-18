import { useParams } from "react-router-dom";
import { format } from 'date-fns';
import videoData from '../../Data/video-details.json';
import './videoplayer.css';

function VideoPlayer() {
    const { id } = useParams();
    const selectedVideo = videoData.find(video => video.id === id) || videoData[0]; 

    return (
        <section className="video-player">
            <div className="video-player__container">
                <video
                    className="video-player__element"
                    controls
                    poster={selectedVideo.image}
                    src={selectedVideo.video}
                ></video>
            </div>
        </section>
    );
}

export default VideoPlayer;