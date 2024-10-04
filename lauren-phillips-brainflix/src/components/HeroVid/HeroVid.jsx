import './herovid.css';
import video from '../../Data/video-details.json';
import { Link } from 'react-router-dom';

function HeroVid() {
    return (
        <main>
            <section className="hero-video">
                {video.map((video) => (
                    <Link to={`/video/${video.id}`} key={video.id}>
                        <article className="hero-video__main">
                            <img src={video.image} alt={video.title} className="video__image" />
                        </article>
                    </Link>
                ))}
            </section>
        </main>
    )
}

export default HeroVid;