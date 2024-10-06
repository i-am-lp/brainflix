import { useParams } from "react-router-dom";
import videoData from '../../Data/video-details.json';
import { format } from 'date-fns';
import { useState, useEffect } from "react";
import './filledcomments.scss';

function FilledComments() {
    const { id } = useParams();
    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
    // const date = new Date(selectedVideo.comment.timestamp);
    // const formattedDate = format(date, 'MM/dd/yyyy');

    useEffect(() => {
        const video = videoData.find(video => video.id === id) || videoData[0]; 
        setSelectedVideo(video); 
    }, [id]);

    if (!selectedVideo) return null;

    return (
        <section className="filled-comments">
            {selectedVideo.comments.map((comment) => {
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