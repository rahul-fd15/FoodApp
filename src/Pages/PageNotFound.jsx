import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Oops! Page not found.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;