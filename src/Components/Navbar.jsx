import React from 'react'

const Navbar = () => {
    return (
      <nav className='fixed flex items-center justify-between w-full -mt-64'>
        <img src="images/Group 1.png" alt="Logo" className='ml-4' /> 
        <ul className="flex mr-4 space-x-4">
          <li><a href="/" className="text-2xl font-extrabold text-white ">Home</a></li>
          <li><a href="/Explore" className="text-2xl font-extrabold text-white ">Explore</a></li>
          <li><a href="/Genre" className="text-2xl font-extrabold text-white ">Genre</a></li>
          <li><a href="/News" className="text-2xl font-extrabold text-white ">News</a></li>
          <li><a href="/Movies" className="text-2xl font-extrabold text-white ">Movies</a></li>
          <li><a href="/TVshow" className="text-2xl font-extrabold text-white ">TV Show</a></li>
        </ul>
      </nav>
    );
  };
  

export default Navbar