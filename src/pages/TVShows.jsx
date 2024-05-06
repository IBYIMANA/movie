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
            <div>
                <h1>helllo</h1>
               
            </div>
          )        
    };
 
export default TVShows