import React from "react";

const Search = () => {
  return (
    <section className="search">
      <div className="container">
        <div className="bg-img">
          <div className="header-row">
            <div className="col-md-6">
              <h4>Welcome to Ticketezy</h4>
              <p>What are you looking for</p>
            </div>
            <div className="col-md-6">
              <ul className="category">
                <li className="genres">Drama</li>
                <li className="genres">Romance</li>
                <li className="genres">Action</li>
                <li className="genres">Comedy</li>
                <li className="genres">Horror</li>
                <li className="genres">Animation</li>
              </ul>
            </div>
          </div>
          <div className="search-area">
            <div className="form-group large">
              <input type="text" placeholder="Search for Movies , Events" />
              <button type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
