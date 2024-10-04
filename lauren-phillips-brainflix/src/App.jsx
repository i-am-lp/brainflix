import Nav from './components/Navigation/navigations.jsx';
import NextVideos from './components/NextVid/NextVid.jsx';
import VideoPlayer from './components/VideoPlayer/videoplayer.jsx';
import CommentSection from './components/CommentSection/commentsection.jsx';
import FilledComments from './components/FilledComments/filledcomments.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

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
                <CommentSection />
                <FilledComments />
                <NextVideos />
              </>
            } />
            <Route path="/video/:id" element={
              <>
                <VideoPlayer />
                <CommentSection />
                <FilledComments />
                <NextVideos />
              </>
            } />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;