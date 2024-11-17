import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import { fetchVideos, fetchVideoById } from '../../utils/apirequests';
import { Link } from 'react-router-dom';
import './homepage.scss';


function HomePage() {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [videos, setVideos] = useState();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const videos = await fetchVideos();
          let videoId = id;
          setVideos(videos);

          if (!id && videos.length > 0) {
            videoId = videos[0].id;
          } if (videoId) {
            const videoDetails = await fetchVideoById(videoId);
            setVideo(videoDetails);
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

    const numberOfComments = video.comments ? video.comments.length : 0;
    const date = video.timestamp ? new Date(video.timestamp) : null;
    const formattedDate = date ? format(date, 'MM/dd/yyyy') : '';

    return (
        <section className="video-player">
            <div className="video-player__container">
                <video
                    className="video-player__element"
                    controls
                    poster={video.image}
                    src={video.video}
                ></video>
            </div>
            <div className='desktop-container'>
                <div className='desktop-container__left'>
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
                    <div className="comments">
                        <div className="comments__image" alt="A close up profile picture of a man"></div>
                            <div className="comments__box">
                                <p className="comments__box--header">JOIN THE CONVERSATION</p>
                                <form id="comments__box--form" className="comments__box--form" method="post">
                                    <textarea name="comments" className="comments__box--form--comment" id="comments" placeholder="Add a new comment"></textarea>
                                    <button type="submit" className="comments__box--form--button">COMMENT</button>
                                </form>
                                
                            </div>
                        </div>
                        {video?.comments?.map((comment) => {
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
                </div>
                <div className='desktop-container__right'>
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
                </div>
            </div>
        </section>
    );
}

export default HomePage;