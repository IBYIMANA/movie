import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [data, setData] = useState([])
    const[like, setLike] =useState([])
    const handleFetch = async () => {
            axios({
                method:"GET",
                url:"https://api.themoviedb.org/3/trending/movie/day?language=en-US",
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzg1MDlhMzAzZjYzYjA3MmVmODk2NzE0MWE4ZTY1YyIsInN1YiI6IjY2MzhkOWQ2OGRlMGFlMDEyNmY3MzgyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MDEDsGPyZxjLEubPXoqD6gfO_nsnxiu5amQShpa48VM'
                  }
            }).then((Response) =>{
                console.log(Response.data.results);
                setData(Response.data.results);
            })
        };
        useEffect(()=>{
            handleFetch()
        }, [])
        const movieFetch = async () => {
            axios({
                method:"GET",
                url:"https://api.themoviedb.org/3/tv/episode_group/tv_episode_group_id",
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzg1MDlhMzAzZjYzYjA3MmVmODk2NzE0MWE4ZTY1YyIsInN1YiI6IjY2MzhkOWQ2OGRlMGFlMDEyNmY3MzgyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MDEDsGPyZxjLEubPXoqD6gfO_nsnxiu5amQShpa48VM'
                  }
            }).then((Response) =>{
                console.log(Response.data.results);
                setLike(Response.data.results);
            })
        };
        useEffect(()=>{
            movieFetch()
        }, [])
        
        return (
            <>
            <div className="py-24 mt-6 ml-12">
              <h1 className="ml-6 text-4xl font-extrabold">FIND MOVIES</h1>
              <h1 className="inline-block ml-6 text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text">
                TV SHOWS  AND MOVIES </h1>
                <p></p>
              <p1 className="ml-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eius
                eveniet quidem,
              </p1>
              <p className="ml-6">
                corrupti corporis rem omnis molestiae ipsa necessitatibus autem,
                excepturi dolore numquam.
              </p>
              <p className="ml-6">
                Fugiat voluptatem temporibus quo aliquid perspiciatis nulla.
              </p>
              <button className=" border-[2px] border-[white] text-[15px] h-10 w-40 ml-6 mt-4">Watch Tutolia</button>
              </div>
              <div className="">
                <img src="images/Vector.png"
                  className="flex -mt-72 ml-[1000px] w-44"
                />
                <img src="images/Group.png" className="flex -mt-60 ml-[900px] w-44" />
              </div>
              <div className="justify-between py-10 mt-4 ml-12">
              <div className="flex items-center">
                <img src="images/Mask1.png"  alt="Trending" />
                <h1 className="ml-10 text-2xl font-extrabold">Trending</h1>
              </div>
              <hr className="w-[80%] ml-[170px]"></hr>
              <h1 className="-mt-5 font-extrabold ml-[1300px]">See More</h1>
            </div>
          
                <div className='flex grid justify-center grid-cols-1 gap-5 ml-10 lg:grid-cols-5'>
            {data.map((item)=>(
                <div key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                    <p>{item.title}</p>
                    <p>{item.release_date}</p>
                    
                </div>
                
        )
            
        )}
             
            </div>
            
            <div className='grid grid-cols-5 gap-5 ' >
                {like.map((item)=>(
                 <div key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                    <p>{item.title}</p>
                    <p>{item.release_date}</p>
                    
                    
                 </div>   
                )
            )}
                </div>  
            </>
          )        
    };
 
export default Home