import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-center">
        <img
          src="https://media.licdn.com/dms/image/D5603AQFat05aTRvjIw/profile-displayphoto-shrink_400_400/0/1692079695101?e=1711584000&v=beta&t=8ZccjGCl6g5ACj4DpsfglIT4dAgdlMlzfsgZ6P1yy6s"
          alt="sharushan"
          className="w-20 h-20 rounded-full mr-4 border-2 border-white"
        />
        <div>
          <h1 className="text-4xl font-extrabold">Chandrasekar Sharushan</h1>
          <p className="text-lg font-semibold">Full Stack Developer | Python Enthusiast</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
