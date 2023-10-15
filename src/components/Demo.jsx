import React, { useState, useEffect } from 'react';
import './Demo.css';

function Demo() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`Demo ${scrolled ? 'scrolled' : ''}`}>
      <nav className={`navbar2 ${scrolled ? 'scrolled' : ''}`}>
        <ul className='px-24 '>
          <li className='text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans'><a href="#">Home</a></li>
          <li className='text-white text-md hover:bg-hoverBackground hover:text-black mr-4 font-sans'><a href="#">About</a></li>
          <li><a href="#">Menus</a></li>
          
        </ul>
        <div className="content">
       salt and pepper
      </div>
      </nav>
     
    </div>
  );
}

export default Demo;
