import { useState } from 'react';
import './navbar.scss';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav className="navbar">
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>ShubhEstate</span>
        </a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Agents</a>
      </div>
      <div className="right">
        {
          user ? (
            <div className='user'>
              <img src="https://i.pinimg.com/474x/cd/d5/6c/cdd56c07fae204d378fb29450444b7aa.jpg" alt="Profile Picture" />
              <span>Shubham Mishra</span>
              <Link to="/profile" className='profile'>
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
          ) :
          <>
          <a href="#">Sign in</a>
        <a href="#" className="register">
          Sign up
        </a>
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
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Agents</a>
          <a href="#">Sign in</a>
          <a href="#">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;