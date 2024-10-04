import { useParams } from "react-router-dom";
import videoData from '../../Data/video-details.json';
import './videoplayer.css';

function VideoPlayer() {
    const { id } = useParams();
    const selectedVideo = videoData.find(video => video.id === id) || videoData[0]; 
    const numberOfComments = selectedVideo.comments.length;

    return (
        <section className="main__video-player">
            <div className="main__video-player__container">
                <video
                    className="main__video-player__element"
                    controls
                    poster={selectedVideo.image}
                    src={selectedVideo.video}
                ></video>
                <div className="main__video-player__details">
                    <h1>{selectedVideo.title}</h1>
                    <div className="main__video-player__details--grouped">
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
                <div className="main__video-player__description">
                    <p>{selectedVideo.description}</p>
                </div>
                <p className="main__video-player__comment-count">{numberOfComments} {numberOfComments === 1 ? 'comment' : 'comments'} </p>
            </div>
        </section>
    );
}

export default VideoPlayer;