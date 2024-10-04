import { useParams } from "react-router-dom";
import videoData from '../../Data/video-details.json';
import { useState, useEffect } from "react";
import './filledcomments.scss';

function FilledComments() {
    const { id } = useParams();
    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

    useEffect(() => {
        const video = videoData.find(video => video.id === id) || videoData[0]; 
        setSelectedVideo(video); 
    }, [id]);

    if (!selectedVideo) return null;

    return (
        <section className="main__filled-comments">
            {selectedVideo.comments.map((comment) => (
                <div key={comment.id} className="main__filled-comments__comment">
                    <div className="main__filled-comments__placeholder-image"></div>
                    <p className="main__filled-comments__name">{comment.name}</p>
                    <p className="main__filled-comments__text">{comment.comment}</p>
                </div>
            ))}
        </section>
    )
}

export default FilledComments;