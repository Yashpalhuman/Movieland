import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from'./search.svg';
import MovieCard from "./MovieCard";


const API_URL='http://www.omdbapi.com?apikey=91307fcf';

// const movie1={
//     "Title": "Inception",
//     "Year": "2010",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
// }

const App=()=>{
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');
    const serchMovies=async(title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        // console.log(data.Search);
        setMovies(data.Search);
    }
    useEffect(()=>{
        serchMovies('Inception');
    },[]);
    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                placeholder="Search for movies" 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon} 
                alt="search" 
                onClick={()=>serchMovies(searchTerm)}
                />
            </div>
            {movies?.length>0
                ?(
                    <div className="container">
                        {/* <MovieCard movie1={movies[0]}/> */}
                        {movies.map((movie)=>(
                            <MovieCard  movie={movie}/>
                        ))}
                    </div>
                ):(
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }

            

        </div>
    );
}

export default App;

//apiKey=91307fcf