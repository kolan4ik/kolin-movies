import React, { Component } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false });
      });
  }

  handlerSearch = (search) => {
    const th = this;
    this.setState({
      loading: true,
    });
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search.search}${search.type !== "" ? `&type=${search.type}` : ""}`)
      .then((res) => res.json())
      .then((data) => th.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="content">
        <div className="container">
          <Search search={this.handlerSearch} />
          {loading ? <Preloader /> : <Movies movies={movies} />}
        </div>
      </main>
    );
  }
}

export default Main;
