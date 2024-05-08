// import React from "react";
import Card from "./Card";
import React, { Component } from "react";

export default class MoviesGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("inside render() of moviesGrid:", this.props);
    return (
      <article className="movies-container text-center mt-5">
        <h2>Trending</h2>
        <div className="container overflow-hidden mt-5">
          <div className="row  justify-content-center justify-content-sm-between row-cols-2   row-cols-md-4 ">
            {this.props.movies.map((movie) => (
              // faith
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </div>

        <div className="pagination-wrapper mt-5 mb-3">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() => this.props.onLeftClick()}
                >
                  Previous
                </a>
              </li>
              {this.props.pArr.map((numOfPage) => (
                <li className="page-item">
                  <a
                    className="page-link"
                    onClick={() => this.props.onSpecificPageChange(numOfPage)}
                  >
                    {numOfPage}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() => this.props.onRightClick()}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </article>
    );
  }
}

// export default class MoviesGrid extends Component {
//   return (
//     <article className="movies-container text-center mt-5">
//       <h2>Trending</h2>
//       <div className="container overflow-hidden mt-5">
//         <div className="row  justify-content-center justify-content-sm-between row-cols-2   row-cols-md-4 ">
//           {this.state..movies.map((movie) => (
//             // faith
//             <Card key={movie.id} movie={movie} />
//           ))}
//         </div>
//       </div>

//       <div className="pagination-wrapper mt-5 mb-3">
//         <nav aria-label="Page navigation example">
//           <ul className="pagination justify-content-center">
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 Previous
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 1
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 2
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 3
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 Next
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </article>
//   );
// }
