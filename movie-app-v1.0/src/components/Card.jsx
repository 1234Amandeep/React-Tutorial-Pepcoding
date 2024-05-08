import React from "react";

export default function Card({ movie }) {
  return (
    <div key={movie.id} className="card mb-4 me-3 me-sm-4 me-md-5">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        class="card-img-top"
        alt={`${movie.title}-banner-img`}
      />
      <div class="card-body">
        <h5 class="card-title">{movie.title}</h5>

        <a href="#" class="btn btn-primary card-btn">
          Favourites
        </a>
      </div>
    </div>
  );
}
