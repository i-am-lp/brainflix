// import './uploadvideo.scss';

const UploadPage = () => {
    return (
        <>
        <div className="upload">
            <h1 className="upload__title">Upload Video</h1>
            <p className="upload__thumbnail--title">VIDEO THUMBNAIL</p>
            <img className="upload__thumbnail--img" src="../../src/assets/Images/Upload-video-preview.jpg" alt="Zoomed in shot of a track race" />
            <div className="upload__form">
                <form id="upload__form" className="upload__form" method="post">
                    <p className="upload__form--title">TITLE YOUR VIDEO</p>
                    <textarea name="title" className="upload__form--title--empty" id="title" placeholder="Add a title to your video"></textarea>
                    <p className="upload__form--description">ADD A VIDEO DESCRIPTION</p>
                    <textarea name="description" className="upload__form--description--empty" id="description" placeholder="Add a description to your video"></textarea>
                    <div className="upload__form__button">
                        <button type="submit" className="upload__form__button--cancel">CANCEL</button>
                        <button type="submit" className="upload__form__button--publish">PUBLISH</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )

}

export default UploadPage;