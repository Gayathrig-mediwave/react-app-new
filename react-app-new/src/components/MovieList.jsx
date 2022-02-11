//to iterate inside the list and print it:
const MovieList=({moviePass ,onDelete, onUpdate})=> {
    return (
      <div>
        <ul>
          {moviePass.map(function (item) {
            return (
              <li key={item.movieId}>
                {""} 
                {item.movieId}
                {" "}  
                {item.movieName}
                {"  "}
                <button onClick={() => onDelete(item.movieId)}>
                  DELETE
                </button>{"  "}
                <button onClick={() => onUpdate(item.movieId)}>
                  UPDATE
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  export default MovieList;