import React from "react";
import { Movie } from "./Movie";

function Movies({ movies = [] }) {
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Nothing video</h4>
      )}
    </div>
  );
}

export { Movies };
