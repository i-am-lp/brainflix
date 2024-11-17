import Nav from './components/Navigation/navigations.jsx';
import HomePage from './components/HomePage/homepage.jsx';
import UploadPage from '../pages/UploadVideo/uploadvideo.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';


function App() {
  return (
    <>
      <BrowserRouter>
          <Nav />

        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
              </>
            } />
            <Route path="/video/:id" element={
              <>
                <HomePage />
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