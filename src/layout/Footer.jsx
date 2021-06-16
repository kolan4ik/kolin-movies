import React from "react";

function Footer() {
  return (
    <footer className="page-footer grey darken-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://github.com/kolan4ik/react-movies">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
