import React, { Component } from "react";
import Banner from "../components/Banner";
import MoviesGrid from "../components/MoviesGrid";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.settings.data);
    return (
      <>
        {this.props.settings.isPending && (
          <div className="loader-container">
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {this.props.settings.error && <p>{this.props.settings.error}</p>}
        {this.props.settings.data && (
          <>
            {/* faith */}
            <Banner movie={findHighRatedMovie(this.props.settings.data)} />
            <main className="containers">
              {/* faith */}
              <MoviesGrid
                onSpecificPageChange={(pageNum) =>
                  this.props.triggerOnSpecificPageChange(pageNum)
                }
                onLeftClick={() => this.props.triggerOnLeftClick()}
                onRightClick={() => {
                  console.log("on right click");
                  this.props.triggerOnRightClick();
                }}
                movies={this.props.settings.data}
                pArr={this.props.settings.pArr}
              />
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
