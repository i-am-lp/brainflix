import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from 'date-fns';
import './filledcomments.scss';

const BASE_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
const apiKey = 'b286a708-8923-4590-9df6-3b753af414ce';

function FilledComments() {
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
        <section className="filled-comments">
            {video.comments.map((comment) => {
                const date = new Date(comment.timestamp);
                const formattedDate = format(date, 'MM/dd/yyyy');

                return (
                    <div key={comment.id} className="filled-comments__comment">
                        <div className="filled-comments__placeholder-image"></div>
                        <div className="filled-comments__full">
                            <div className="filled-comments__full--name-date">
                                <p className="filled-comments__name">{comment.name}</p>
                                <p className="filled-comments__date">{formattedDate}</p>
                            </div>
                            <p className="filled-comments__text">{comment.comment}</p>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default FilledComments;