import React, { useState } from "react";

export default function Card({ movie, isAdded, addHandler, removeHandler }) {
  return (
    <div key={movie.id} className="card mb-4 me-3 me-sm-4 me-md-5">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        className="card-img-top"
        alt={`${movie.title}-banner-img`}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>

        {isAdded ? (
          <a
            onClick={removeHandler}
            href="#"
            className="btn btn-primary card-btn"
          >
            Remove
          </a>
        ) : (
          <a onClick={addHandler} href="#" className="btn btn-primary card-btn">
            Add
          </a>
        )}
      </div>
    </div>
  );
}
