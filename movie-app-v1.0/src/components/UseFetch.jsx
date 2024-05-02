import React, { Component } from "react";
import Banner from "./Banner";
import MoviesGrid from "./MoviesGrid";

export default class UseFetch extends Component {
  constructor() {
    super();
    this.state = {
      isPending: true,
      data: null,
      error: null,
      pArr: [1],
      url: "https://api.themoviedb.org/3/movie/popular?api_key=4b8bf102e2255d866cf5b852dd737fee&language=en-US&page=1",
    };
  }

  getData() {
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
          console.log(data.results);
          this.setState({
            isPending: false,
            data: data.results,
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
        {this.state.isPending && (
          <div className="loader-container">
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.data && (
          <>
            {/* faith */}
            <Banner movie={findHighRatedMovie(this.state.data)} />

            <main className="containers">
              {/* faith */}
              <MoviesGrid movies={this.state.data} pArr={this.state.pArr} />
            </main>
          </>
        )}
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
