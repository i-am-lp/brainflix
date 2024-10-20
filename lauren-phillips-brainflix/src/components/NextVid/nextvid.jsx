import './nextvid.scss';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
const apiKey = 'b286a708-8923-4590-9df6-3b753af414ce';

function NextVideos() {
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
    
    return (
        <div className='desktop-container__right'>
            <section className="next-video">
                <p className='next-video__title'>NEXT VIDEOS</p>
                {videos.filter((vid) => vid.id !== video.id)
                .map((vid) => (
                    <Link to={`/video/${vid.id}`} key={vid.id} className="next-video__link">
                        <article className="next-video__main">
                            <img src={vid.image} alt={vid.title} className="next-video__image" />
                            <div className='next-video__details'>
                                <p className="next-video__details--title">{vid.title}</p>
                                <p className='next-video__details--by'>{vid.channel}</p>
                            </div>
                        </article>
                    </Link>
                ))}
            </section>
        </div>
    );
}

export default NextVideos;