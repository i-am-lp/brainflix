import './nextvid.css';
import { useParams } from "react-router-dom";
import videoData from '../../Data/video-details.json';
import { Link } from 'react-router-dom';

function NextVideos() {
    const { id } = useParams();
    const selectedVideo = videoData.find(video => video.id === id) || videoData[0]; 
    
    return (
        <section className="next-video">
            {videoData
                .filter(video => video.id !== selectedVideo.id)
                .map((video) => (
                <Link to={`/video/${video.id}`} key={video.id}>
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