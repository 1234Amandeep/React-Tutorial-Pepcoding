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
          <div class="col-9">Favorite List</div>
        </div>
      </div>
    </article>
  );
}

export default FavoritePage;
