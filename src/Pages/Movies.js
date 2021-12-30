import React, { useState, useEffect } from "react";
import "../Css/User.css";
import Axios from "axios";
import Banner from "../Components/Movies/Banner";
import Search from "../Components/Movies/Search";
import Browse from "../Components/Movies/Browse";
import { Ripple } from "react-preloaders";

const Movies = () => {
  let url = "https://apidev.ticketezy.com/events_list";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setLoading(true);
    Axios.get(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => {
      setLoading(false)
      setMovies(res.data);
    })
  }, [])

  console.log(movies);

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
      <Ripple customLoading={loading} time={3000} />
    </>
  );
};

export default Movies;