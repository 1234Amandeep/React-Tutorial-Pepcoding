import React from "react";

export default function Banner(props) {
  return (
    <article className="banner-container ">
      <div className="container">
        <h1>{props.movie.name}</h1>
        <p>{props.movie.description}</p>
      </div>
    </article>
  );
}
