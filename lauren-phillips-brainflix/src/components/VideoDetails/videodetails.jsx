import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import axios from "axios";
import '../VideoPlayer/videoplayer.scss';


const BASE_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
const apiKey = 'b286a708-8923-4590-9df6-3b753af414ce';

function VideoDetails() {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const [video, setVideo] = useState(null); 
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/videos/?api_key=${apiKey}`);
                const data = await response.json();
                setVideos(data);

                if (!id && data.length > 0) {
                    const firstVideoId = data[0].id;
                    const videoResponse = await fetch(`${BASE_URL}/videos/${firstVideoId}?api_key=${apiKey}`);
                    const videoData = await videoResponse.json();
                    setVideo(videoData); 

                } else {
                    const response = await fetch(`${BASE_URL}/videos/${id}?api_key=${apiKey}`);
                    const videoData = await response.json();
                    setVideo(videoData); 
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [id, navigate]); 

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