import React from "react";

function Header() {
  return (
    <nav className="grey darken-2">
      <div className="nav-wrapper">
        <div className="brand-logo">Movies</div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/kolan4ik/react-movies">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
