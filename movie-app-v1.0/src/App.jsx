import "./styles.css";
import Navbar from "./components/Navbar";
import FavoritePage from "./pages/FavoritePage";
import MoviesGrid from "./components/MoviesGrid";
import Banner from "./components/Banner";

import React, { Component } from "react";
import HomePage from "./pages/HomePage";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isPending: true,
      data: null,
      error: null,
      pArr: [1],
      currPage: 1,
      favList: [],
    };
  }

  getData() {
    console.log(this.state.currPage);
    // asking for UseFetch fn to get me data from the api by perfoming some asynchronous task
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=4b8bf102e2255d866cf5b852dd737fee&language=en-US&page=${this.state.currPage}`
      )
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

  onRightClick() {
    console.log("inside onRightClick()");
    this.setState(
      {
        pArr: [...this.state.pArr, this.state.pArr.length + 1],
        currPage: this.state.currPage + 1,
      },
      this.getData
    );
  }

  onLeftClick() {
    if (this.state.currPage != 1) {
      this.setState(
        {
          currPage: this.state.currPage - 1,
        },
        this.getData
      );
    }
  }

  onSpecificPageChange(pageNum) {
    if (pageNum != this.state.currPage) {
      this.setState(
        {
          currPage: pageNum,
        },
        this.getData
      );
    }
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
        </header>

        {/* faith */}
        <HomePage
          settings={{
            data: this.state.data,
            isPending: this.state.isPending,
            error: this.state.error,
            pArr: this.state.pArr,
          }}
          triggerOnSpecificPageChange={(page) => {
            this.onSpecificPageChange(page);
          }}
          triggerOnLeftClick={() => {
            this.onLeftClick();
          }}
          triggerOnRightClick={() => {
            this.onRightClick();
          }}
        />

        {/* FAVOURITES PAGE */}
        <FavoritePage />
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
