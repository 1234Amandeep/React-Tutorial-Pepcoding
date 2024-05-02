import React from "react";

export default function Card({ movie }) {
  return (
    <div key={movie.id} className="card mb-4 me-3 me-sm-4 me-md-5">
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        {/* todo: add to favourites */}
        <a href="#" className="btn card-btn btn-primary">
          Add to favourites
        </a>
      </div>
    </div>
  );
}
