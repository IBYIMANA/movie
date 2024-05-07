import React from 'react'

const Navbar = () => {
    return (
      <nav className='fixed flex items-center justify-between w-full ml-12 text-white'>
        <img src="images/Group 1.png" alt="Logo" className='ml-4' /> 
        <ul className="flex mr-3 space-x-4">
          <li><a href="/" className="font-extrabold text-white ">Home</a></li>
          <li><a href="/Explore" className="font-extrabold text-white ">Explore</a></li>
          <li><a href="/Genre" className="font-extrabold text-white ">Genre</a></li>
          <li><a href="/News" className="font-extrabold text-white ">News</a></li>
          <li><a href="/Movies" className="font-extrabold text-white ">Movies</a></li>
          <li><a href="/TVShows" className="font-extrabold text-white ">TVShows</a></li>
        </ul>
      </nav>
    );
  };
  

export default Navbar