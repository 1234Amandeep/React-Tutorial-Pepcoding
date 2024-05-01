import React, { Component } from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MoviesGrid from "./components/MoviesGrid";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      isPending: true,
      error: null,
      url: "http://localhost:3000/movies",
    };
  }

  getData() {
    console.log("inside getData() of app()");
    // asking for UseFetch fn to get me data from the api by perfoming some asynchronous task
    setTimeout(() => {
      fetch(this.state.url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Error fetching movies data");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          this.setState({
            isPending: false,
            data: data,
            error: null,
          });
        })
        .catch((err) => {
          this.setState({
            isPending: false,
            error: err.message,
          });
        });
    }, [1000]);
    // setting internal configurations of the app so that react can run its reconcillation algo to determine wheather to change the actual dom or not
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <>
        {/*
         *By faith -> <Header />: I beleive 75vw again
         *Main-section-container: I believe 75vw again (just to keep things together)
         *By faith -> <MoviesGrid />: I believe again 75vw
         */}

        {/* faith */}
        <header className="header-container">
          {/* faith */}
          <Navbar
            data={{
              logo: "Movie App",
              links: [
                {
                  text: "Favourites",
                  href: "/favourites",
                },
              ],
            }}
          />

          {/* faith */}
          {this.state.isPending && <p>Loading...</p>}
          {this.state.data && (
            <Banner movie={findHighRatedMovie(this.state.data)} />
          )}
        </header>
        <main className="container">
          {/* faith */}
          {/* Start from here... pass below component movies argument */}
          {this.state.error && <p>{this.state.error}</p>}
          {this.state.data && <MoviesGrid movies={this.state.data} />}
        </main>
      </>
    );
  }
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
export default App;
