import React from "react";

export default function MoviesGrid(props) {
  return (
    <article className="movies-container text-center">
      <h2>Trending</h2>
      <div className="container overflow-hidden">
        <div className="row justify-content-center row-cols-2   row-cols-md-4 ">
          {props.movies.map((movie) => (
            <div key={movie.id} className="card mb-4 me-3 me-sm-4 me-md-5">
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                {/* todo: add to favourites */}
                <a href="#" className="btn card-btn btn-primary">
                  Add to favourites
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
