import React, { useState } from "react";

function Search({ searchMovies }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies({ search, type });
    }
  };

  const handlerFilter = (e) => {
    setType(e.target.value);
    searchMovies({ search, type: e.target.value });
  };
  return (
    <div className="row">
      <div className="col s12">
        <div className="row">
          <div style={{ position: "relative" }} cla="input-field inline col s12 row">
            <button style={{ position: "absolute", right: 0 }} onClick={() => searchMovies({ search, type })} className="btn waves-effect waves-light">
              Search
            </button>
            <input placeholder="Search" type="search" className="validate " value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKey} />
          </div>
        </div>
        <div className="row">
          <div className="col c4">
            <label>
              <input className="with-gap" name="type" type="radio" onChange={handlerFilter} checked={type === ""} value="" />
              <span>all</span>
            </label>
          </div>
          <div className="col c4">
            <label>
              <input className="with-gap" name="type" type="radio" onChange={handlerFilter} checked={type === "movie"} value="movie" />
              <span>movies</span>
            </label>
          </div>
          <div className="col c4">
            <label>
              <input className="with-gap" name="type" type="radio" onChange={handlerFilter} checked={type === "series"} value="series" />
              <span>series</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Search };
