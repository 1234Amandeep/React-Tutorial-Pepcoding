import React from "react";

export default function Banner(props) {
  return (
    <article className="banner-container ">
      {/* Todo: Banner image ko control krunga shi proportion mein show krunga && 
          Text uske uppar shi jha shi size ka krunga... Similar kam card ke sath bhi hoga
      */}
      <img
        src={`https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`}
        className="banner-img"
        alt={`${props.movie.title}-banner-img`}
      />
      <div className=" container banner-text ">
        <h1>{props.movie.title}</h1>
        <p>{props.movie.overview}</p>
      </div>
    </article>
  );
}
