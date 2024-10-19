import './nextvid.css';
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
                    setVideo(data[0]);
                } else {
                    const response = await fetch(`${BASE_URL}/videos/${id}?api_key=${apiKey}`);
                    const contentType = response.headers.get('content-type');
                    const data = await response.json();
                    setVideo(data); 
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
        <section className="next-video">
            <p className='next-video__title'>NEXT VIDEOS</p>
            {videos.map((video) => (
                <Link to={`/video/${video.id}`} key={video.id}  className="next-video__link">
                    <article className="next-video__main">
                        <img src={video.image} alt={video.title} className="next-video__image" />
                        <div className='next-video__details'>
                            <p className="next-video__details--title">{video.title}</p>
                            <p className='next-video__details--by'>{video.channel}</p>
                        </div>
                    </article>
                </Link>
            ))}
        </section>
    );
}

export default NextVideos;