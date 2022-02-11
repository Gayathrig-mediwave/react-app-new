import { useState, useEffect } from "react";
import AddMovieForm from "../components/AddMovieForm";
import MovieList from "../components/MovieList";
import { getMoviesFromStorage } from "../utils";
import { setMoviesToStorage } from "../utils";
import{AllPage} from "../components/AllPage";

export const HomePage=()=> {
    const initialState = [
      {
        movieId: new Date().getTime(),
        movieName: "The Lion King",
      },
      {
        movieId: new Date().getTime(),
        movieName: "Pirates of the carribean",
      },
      {
        movieId: new Date().getTime(),
        movieName: "Narnia",
      },
    ];
    const [movies, SetMovies] = useState([]);
    //to get movies from storage:
    useEffect(() => {
      const movie = getMoviesFromStorage();
      if (movie) {
        const movieJSON = JSON.parse(movie);
        SetMovies(movieJSON);
      }
    }, []);
    //to set movies to storage:
    useEffect(() => {
      const movie = JSON.stringify(movies);
      setMoviesToStorage(movie);
    }, [movies]);
    //function to add movie:
    function handleAddMovie(name) {
      const movie = {
        movieId: new Date().getTime(),
        movieName: name,
      };
      const movieList = [...movies];
      movieList.push(movie);
      SetMovies(movieList);
      console.log("movieList", movieList);
    }
    //function to delete movie:
    function handleDelete(movieId) {
      console.log("delete id", movieId);
      SetMovies((values) => {
        const items = values.filter((i) => i.movieId !== movieId);
        return items;
      });
    }
    //render movie form & movielist:
    return (
      <div className="App">
       <AllPage>
        <AddMovieForm onAdd={handleAddMovie} />
        <MovieList moviePass={movies} onDelete={handleDelete} />
        </AllPage> 
      </div>
    );
  }
  