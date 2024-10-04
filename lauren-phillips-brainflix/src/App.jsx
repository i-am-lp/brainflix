import { useState } from 'react'
import Nav from './components/Navigation/navigations.jsx';
import NextVideos from './components/NextVid/NextVid.jsx';
import VideoPlayer from './components/VideoPlayer/videoplayer.jsx';
import CommentSection from './components/CommentSection/commentsection.jsx';
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
            <Route path="/" element={<VideoPlayer />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
            {/* Add other routes as needed */}
          </Routes>
          <CommentSection />
          <NextVideos />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;