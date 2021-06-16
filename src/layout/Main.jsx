import React, { useState, useEffect } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handlerSearch = (search) => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search.search}${search.type !== "" ? `&type=${search.type}` : ""}`)
      .then((res) => res.json())
      .then((data) => {
        debugger;
        setMovies(data.Search);
        setLoading(false);
      });
  };

  return (
    <main className="content">
      <div className="container">
        <Search searchMovies={handlerSearch} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </div>
    </main>
  );
}

export { Main };
