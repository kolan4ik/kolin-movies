import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    type: "",
  };

  handleKey = (e) => {
    debugger;
    if (e.key === "Enter") {
      this.props.search(this.state);
    }
  };

  handlerFilter = (e) => {
    this.setState(
      () => ({ type: e.target.value }),
      () => this.props.search(this.state)
    );
  };
  render() {
    const { type } = this.state;
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div
              style={{ position: "relative" }}
              cla="input-field inline col s12 row"
            >
              <button
                style={{ position: "absolute", right: 0 }}
                onClick={(e) => this.props.search(this.state)}
                className="btn waves-effect waves-light"
              >
                Search
              </button>
              <input
                placeholder="Search"
                type="search"
                className="validate "
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyDown={this.handleKey}
              />
            </div>
          </div>
          <div className="row">
            <div className="col c4">
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  onChange={this.handlerFilter}
                  checked={type === ""}
                  value=""
                />
                <span>all</span>
              </label>
            </div>
            <div className="col c4">
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  onChange={this.handlerFilter}
                  checked={type === "movie"}
                  value="movie"
                />
                <span>movies</span>
              </label>
            </div>
            <div className="col c4">
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  onChange={this.handlerFilter}
                  checked={type === "series"}
                  value="series"
                />
                <span>series</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Search };
