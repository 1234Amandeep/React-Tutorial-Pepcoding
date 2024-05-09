import React from "react";

function FavoritePage() {
  return (
    <article className="fav-page pt-5">
      <h1 className="text-center mb-5 display-6">
        <u>Favorite List</u>
      </h1>
      <div class="container ">
        <div class="row">
          {/* TODO: CHANGE THIS HARD CODED VALUES */}
          <div className="col-3">
            <ul class="list-group">
              <li class="list-group-item active" aria-current="true">
                All Genres
              </li>
              <li class="list-group-item">Sci-Fi</li>
              <li class="list-group-item">Action</li>
              <li class="list-group-item">Thriller</li>
              <li class="list-group-item">Romance</li>
            </ul>
          </div>
          {/* Todo: Make layout using bootstrap's grid system */}
          <div class="col-9">
            <div className="row">
              <div className="col-6">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="input-group mb-3">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="5"
                    aria-label="popularity"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col-6">Title</th>
                      <th scope="col">Genre</th>
                      <th scope="col">Popularity</th>
                      <th scope="col">Rating</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="col-6">
                        <img src="./banner.jpg" className="img col-3 me-2" />
                        <span className="title">title</span>
                      </td>
                      <td scope="col">Sci-Fi</td>
                      <td scope="col">2792</td>
                      <td scope="col">7.8</td>
                      <td scope="col">
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-6">
                        <img src="./banner.jpg" className="img col-3 me-2" />
                        <span className="title">title</span>
                      </td>
                      <td scope="col">Sci-Fi</td>
                      <td scope="col">2792</td>
                      <td scope="col">7.8</td>
                      <td scope="col">
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-6">
                        <img src="./banner.jpg" className="img col-3 me-2" />
                        <span className="title">title</span>
                      </td>
                      <td scope="col">Sci-Fi</td>
                      <td scope="col">2792</td>
                      <td scope="col">7.8</td>
                      <td scope="col">
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-6">
                        <img src="./banner.jpg" className="img col-3 me-2" />
                        <span className="title">title</span>
                      </td>
                      <td scope="col">Sci-Fi</td>
                      <td scope="col">2792</td>
                      <td scope="col">7.8</td>
                      <td scope="col">
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-6">
                        <img src="./banner.jpg" className="img col-3 me-2" />
                        <span className="title">title</span>
                      </td>
                      <td scope="col">Sci-Fi</td>
                      <td scope="col">2792</td>
                      <td scope="col">7.8</td>
                      <td scope="col">
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="col-6">
                        <img src="./banner.jpg" className="img col-3 me-2" />
                        <span className="title">title</span>
                      </td>
                      <td>Action</td>
                      <td>1505</td>
                      <td>6.4</td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <nav aria-label="...">
              <ul class="pagination pagination-sm">
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1</span>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FavoritePage;
