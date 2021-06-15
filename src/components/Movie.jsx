import React from "react";

function Movie({
  Title: title,
  Year: year,
  imdbID: id,
  Type: type,
  Poster: poster,
}) {
  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <img
            className="activator"
            src={`https://via.placeholder.com/308x456?text=${title}`}
            alt={title}
          />
        ) : (
          <img className="activator" src={poster} alt={title} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
