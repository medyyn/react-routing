import React from "react";

const NotFound = () => {
  return (
    <section className="errorbody">
      <div className="notfound-wrapper">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-text">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a href="/" className="notfound-button">
          Go Home
        </a>
      </div>
    </section>
  );
};

export default NotFound;
