import './navigation.scss'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <header>
        <nav className="header">
          <div className="header__logo">
            <NavLink to="/" ><img className="header__logo--img" src="../src/assets/Logo/BrainFlix-logo.svg" alt="Brainflix logo" /></NavLink> 
          </div>
          <div className="header__profile">
            <form className="header__profile--search">
              <input className="header__profile--search-box" type="text" id="search" name="search" placeholder="Search" />
            </form>
            <div className="header__profile--image" alt="A close up profile picture of a man"></div>
            <button type="submit" className="header__upload-button">
              <Link to="/video/upload" className="header__upload-button--link">UPLOAD</Link>
            </button>
          </div>
        </nav>
      </header>
    )
}

export default Nav;