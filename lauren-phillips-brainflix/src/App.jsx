import Nav from './components/Navigation/navigations.jsx';
import NextVideos from './components/NextVid/NextVid.jsx';
import VideoPlayer from './components/VideoPlayer/videoplayer.jsx';
import VideoDetails from './components/VideoDetails/videodetails.jsx';
import CommentSection from './components/CommentSection/commentsection.jsx';
import FilledComments from './components/FilledComments/filledcomments.jsx';
import UploadPage from '../pages/UploadVideo/uploadvideo.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Nav />
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <VideoPlayer />
                <div className='desktop-container'>
                <div className='desktop-container__left'>
                <VideoDetails />
                <CommentSection />
                <FilledComments />
                </div>
                <div className='desktop-container__right'>
                <NextVideos />
                </div>
                </div>
              </>
            } />
            <Route path="/video/:id" element={
              <>
                <VideoPlayer />
                <div className='desktop-container'>
                <div className='desktop-container__left'>
                <VideoDetails />
                <CommentSection />
                <FilledComments />
                </div>
                <div className='desktop-container__right'>
                <NextVideos />
                </div>
                </div>
              </>
            } />

            <Route path="/video/upload" element={
              <>
              <UploadPage />
              </>
            } />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;