import React from 'react';
import ProfileImage from '../images/sharushan.jpg';
import './Header.css'; // Import your CSS file

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-center">
        <div className="profile-container">
          <img
            src={ProfileImage}
            alt="sharushan"
            className="profile-image rounded-full border-2 border-white"
          />
        </div>
        <div className="ml-4"> {/* Add margin to shift the content to the right */}
          <h1 className="text-4xl font-extrabold">Chandrasekar Sharushan</h1>
          <p className="text-lg font-semibold">Full Stack Developer | Python Enthusiast</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
