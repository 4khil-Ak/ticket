import React, { useState, useEffect } from "react";
import "../Css/User.css";
import { eventData } from "../Json/Events";
import Banner from "../Components/Movies/Banner";
import Search from "../Components/Movies/Search";
import Browse from "../Components/Movies/Browse";

const Movies = () => {
  const [filter, setfilter] = useState([]);

  const handlefilters = (post) => {
    const ret = eventData.filter((x) =>
      post.some((y) => y.Language === x.language || y.category === x.categories || y.start === 'low' && (x.price <= 500 && x.price >= 0) || y.start === 'free' && (x.price === 'free') || y.start === 'medium' && (x.price <= 2000 && x.price >= 500) || y.start === 'high' && (x.price >= 2000))
    );
    setfilter(ret);
  };
  const handleclear = () => {
    setfilter([]);
  }
  return (
    <>
      <Banner />
      <Search />
      {filter.length === 0 && (
        <Browse handlefilters={handlefilters} filter={eventData} handleclear={handleclear} />
      )}
      {filter.length >= 1 && (
        <Browse handlefilters={handlefilters} filter={filter} handleclear={handleclear} />
      )}
    </>
  );
};

export default Movies;