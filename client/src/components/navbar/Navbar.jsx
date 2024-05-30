import { useContext, useState } from 'react';
import './navbar.scss';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const {currentUser} = useContext(AuthContext);

  const user = true;

  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" className="link logo">
          <img src="/logo.png" alt="" />
          <span>ShubhEstate</span>
        </Link>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="#">About</Link>
        <Link className='link' to="#">Contact</Link>
        <Link className='link' to="#">Agents</Link>
      </div>
      <div className="right">
        {
          currentUser ? (
            <div className='user'>
              <img src={currentUser.avatar || "https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="Profile Picture" />
              <span>{currentUser.username}</span>
              <Link to="/profile" className='profile'>
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
          ) :
          <>
          <Link to="/login" className='login link'>Sign in</Link>
        <Link to="/register" className="link register">
          Sign up
        </Link>
        </>
        }
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="#">About</Link>
          <Link className='link' to="#">Contact</Link>
          <Link className='link' to="#">Agents</Link>
          <Link className='link' to="/login">Sign in</Link>
          <Link className='link' to="register">Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;