//to get values from local storage:
export const getMoviesFromStorage = () => {
  return localStorage.getItem("movie");
};
//to set values to local storage:
export const setMoviesToStorage = (movie) => {
  return localStorage.setItem("movie", movie);
};
