import { useParams } from "react-router-dom";
import { format } from 'date-fns';
import videoData from '../../Data/video-details.json';
import './videoplayer.css';

function VideoPlayer() {
    const { id } = useParams();
    const selectedVideo = videoData.find(video => video.id === id) || videoData[0]; 
    const numberOfComments = selectedVideo.comments.length;
    const date = new Date(selectedVideo.timestamp);
    const formattedDate = format(date, 'MM/dd/yyyy');

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
                    <h1 className="video-player__details--title">{selectedVideo.title}</h1>
                    <div className="video-player__details--grouped">
                        <div className="video-player__details--grouped--a">
                            <p className="video-player__details--grouped--channel">By {selectedVideo.channel}</p>
                            <p className="video-player__details--grouped--date">{formattedDate}</p>
                        </div>
                        <div className="video-player__details--grouped--b">
                            <p className="video-player__details--views"> 
                                <img src="../../src/assets/Icons/views.svg" /> 
                                {selectedVideo.views}
                            </p>
                            <p className="video-player__details--likes">
                                <img src="../../src/assets/Icons/likes.svg" />
                                {selectedVideo.likes}
                            </p>
                            </div>
                    </div>
                </div>
                <div className="video-player__description">
                    <p>{selectedVideo.description}</p>
                </div>
                <p className="video-player__comment-count">{numberOfComments} {numberOfComments === 1 ? 'comment' : 'comments'} </p>
            </div>
        </section>
    );
}

export default VideoPlayer;