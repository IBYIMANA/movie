import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TVShows = () => {
    const [data, setData] = useState([])
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
        return (
                <div className='grid justify-center grid-cols-1 lg:grid-cols-5 gap-7'>
            {data.map((item)=>(
                <div key={item.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
                    <p>{item.title}</p>
                </div>
        )
            
        )}
               
            </div>
          )        
    };
 
export default TVShows