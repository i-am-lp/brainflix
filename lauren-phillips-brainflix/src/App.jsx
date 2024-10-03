import { useState } from 'react'
import Nav from './components/Navigation/navigations.jsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <header>
      < Nav />
      </header>

      <body>
        {/* <HeroVid /> */}
        {/* javascript for video */}

        {/* <CommentUnfilled /> */}
        {/* javascript for unfilled comments */}

        {/* <CommentFilled /> */}
        {/* javascript for filled comments */}

        {/* <NextVideo /> */}
        {/* javascript for the next video */}

      </body>
      </BrowserRouter>
    </>
  )
}

export default App
