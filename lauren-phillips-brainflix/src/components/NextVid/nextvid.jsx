import './nextvid.scss';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchVideos, fetchVideoById } from '../../utils/apirequests';
import { Link } from 'react-router-dom';


function NextVideos() {
    const { id } = useParams();
    const [video, setVideo] = useState(null); 
    const [videos, setVideos] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
              const videos = await fetchVideos();
              setVideos(videos);

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