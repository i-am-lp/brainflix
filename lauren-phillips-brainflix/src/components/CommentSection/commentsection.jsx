import './commentsection.scss';

function CommentSection () {
    return (
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
    )
}

export default CommentSection;