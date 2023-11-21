import React, { useEffect,useState } from 'react';
import './Nav.css';
function Nav() {
    const [show, setShow] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setShow(true);
        } else setShow(false);
      });
    
      return () => {
        window.removeEventListener("scroll",Nav);
      };
    }, []);
   
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo'
        src="./netflix-logo.png" alt="Netflix Logo" />
      <img className='nav_avatar'
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Nav Avatar" />
    </div>
  )
}

export default Nav
