import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-center">
        <img
          src="/sharushan.jpg"
          alt="sharushan"
          className="w-20 h-20 rounded-full mr-4 border-2 border-white"
        />
        <div>
          <h1 className="text-4xl font-extrabold">Chandrasekar Sharushan</h1>
          <p className="text-lg font-semibold">Web Developer</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
