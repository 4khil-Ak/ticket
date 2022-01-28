import React, { useState, useEffect } from "react";
import "../Css/User.css";
import Axios from "axios";
import Banner from "../Components/Movies/Banner";
import Search from "../Components/Movies/Search";
import Browse from "../Components/Movies/Browse";
import Loader from "../Ui/Loader";

const Movies = () => {
  let url = "https://apidev.ticketezy.com/movies";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    Axios.get(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => {
      setMovies(res.data);
      setLoading(false);
    })
  }, [])

  const handlefilters = (post) => {
    const ret = movies.filter((x) =>
      post.some((y) => y.Language === x.language || y.category === x.categories || y.start === 'low' && (x.price <= 500 && x.price >= 0) || y.start === 'free' && (x.price === 'free') || y.start === 'medium' && (x.price <= 2000 && x.price >= 500) || y.start === 'high' && (x.price >= 2000))
    );
    setFilter(ret);
  };
  const handleclear = () => {
    setFilter([]);
  }
  return (
    <>
      <Banner />
      <Search />
      {filter.length === 0 && (
        <Browse handlefilters={handlefilters} filter={movies} handleclear={handleclear} />
      )}
      {filter.length >= 1 && (
        <Browse handlefilters={handlefilters} filter={filter} handleclear={handleclear} />
      )}
      {loading && <Loader />}
    </>
  );
};

export default Movies;