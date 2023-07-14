import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/course-offered" style={{ marginRight: '20px' }}>Courses Offered</Link>
        <Link to="/about-us">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;
