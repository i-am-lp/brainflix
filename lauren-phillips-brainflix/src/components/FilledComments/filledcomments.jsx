import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchVideos, fetchVideoById } from '../../utils/apirequests';
import { format } from 'date-fns';
import './filledcomments.scss';


function FilledComments() {
    const { id } = useParams(); 
    const [video, setVideo] = useState({ comments: [] });


    useEffect(() => {
        const fetchData = async () => {
            try {
              const videos = await fetchVideos();
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
        <section className="filled-comments">
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
        </section>
    );
}

export default FilledComments;