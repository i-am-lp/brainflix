import { useParams } from "react-router-dom";
import videoData from '../../Data/video-details.json';
import './VideoPlayer.css';

function VideoPlayer() {
    const { id } = useParams();
    const selectedVideo = videoData.find(video => video.id === id) || videoData[0]; // Default to the first video if no ID matches

    return (
        <section className="video-player">
            <div className="video-player__container">
                <video
                    className="video-player__element"
                    controls
                    poster={selectedVideo.image}
                    src={selectedVideo.video}
                ></video>
                <div className="video-player__details">
                    <h1>{selectedVideo.title}</h1>
                    <div className="video-player__details--grouped">
                    <p>By {selectedVideo.channel}</p>
                    <p>{selectedVideo.timestamp}</p>
                    <p> 
                        <img src="../../src/assets/Icons/views.svg" /> 
                        {selectedVideo.views}
                    </p>
                    <p>
                        <img src="../../src/assets/Icons/likes.svg" />
                        {selectedVideo.likes}
                    </p>
                </div>
                </div>
                <div className="video-player__desscription">
                    <p>{selectedVideo.description}</p>
                </div>
            </div>
        </section>
    );
}

export default VideoPlayer;