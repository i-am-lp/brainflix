import './commentsection.scss';

function CommentSection () {
    return (
        <div className="main__comments">
            <h2 className="main__comments--header">Join the Conversation</h2>
            <div className="main__comments--form--box">
                <div className="main__comments--image" alt="A close up profile picture of a man"></div>
                <form id="main__comments--form" className="main__comments--form" method="post">
                    <textarea name="comments" className="main__comments--form--placeholder main__comments--form--placeholder--comment" id="comments" placeholder="Add a new comment"></textarea>
                    <button type="submit" className="main__comments--form--button">COMMENT</button>
                </form>
                
            </div>
        </div>
    )
}

export default CommentSection;