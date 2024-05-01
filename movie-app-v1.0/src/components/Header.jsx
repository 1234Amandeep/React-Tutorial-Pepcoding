import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

export default function Header(props) {
  console.log(props);
  //finding highest rated movie
  const movieHighestRated = findHighRatedMovie(props.movies);

  return (
    <>
      {/*
       *header-container: I believe its 100vw
       *Navbar-container: I believe its 70vw
       *By faith -> <Navbar data={props.navbar}/>
       *Heroku-section-container: I belive its
       *By faith -> <Banner movie={movieHighestRated}/>
       */}
      <header className="header-container">
        {/* faith */}
        <Navbar
          className="container"
          data={{
            logo: "Movie App",
            links: [
              {
                text: "Favourites",
                link: "/favourites",
              },
            ],
          }}
        />
        <article className="banner-container">
          {/* faith */}
          <Banner movie={movieHighestRated} />
        </article>
      </header>
    </>
  );
}
function findHighRatedMovie(arr) {
  let highest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (highest.rating < arr[i].rating) {
      highest = arr[i];
    }
  }
  return highest;
}
