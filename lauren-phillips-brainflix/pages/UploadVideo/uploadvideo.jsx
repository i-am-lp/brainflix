import './uploadedvideo.scss';

const UploadPage = () => {
    return (
        <>
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className='upload__desktop'>
                <div className='upload__desktop--thumbnail'>
                    <p className="upload__form--text">VIDEO THUMBNAIL</p>
                    <img className="upload__thumbnail--img" src="../../src/assets/Images/Upload-video-preview.jpg" alt="Zoomed in shot of a track race" />
                </div>
                <div className="upload__form">
                    <form id="upload__form" className="upload__form" method="post">
                        <p className="upload__form--text">TITLE YOUR VIDEO</p>
                        <textarea name="title" className="upload__form__empty upload__form--title" id="title" placeholder="Add a title to your video"></textarea>
                        <p className="upload__form--text">ADD A VIDEO DESCRIPTION</p>
                        <textarea name="description" className="upload__form__empty upload__form--description" id="description" placeholder="Add a description to your video"></textarea>
                        <div className="upload__form__button">
                            <button type="submit" className="upload__form__button--publish">PUBLISH</button>
                            <button type="submit" className="upload__form__button--cancel">CANCEL</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )

}

export default UploadPage;