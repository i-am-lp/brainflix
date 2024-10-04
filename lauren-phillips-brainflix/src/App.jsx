import { useState } from 'react'
import Nav from './components/Navigation/navigations.jsx';
import HeroVid from './components/HeroVid/herovid.jsx';
import VideoPlayer from './components/VideoPlayer/videoplayer.jsx';
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
          <HeroVid />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;