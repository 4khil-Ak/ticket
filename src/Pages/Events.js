import React, { useState, useEffect } from "react";
import "../Css/User.css";
import { eventData } from "../Json/Events";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Events/Banner";
import Search from "../Components/Events/Search";
import Browse from "../Components/Events/Browse";
import Footer from "../Components/Footer/Footer";

const Events = () => {
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
      <Navbar />
      <Banner />
      <Search />
      {filter.length === 0 && (
        <Browse handlefilters={handlefilters} filter={eventData} handleclear={handleclear} />
      )}
      {filter.length >= 1 && (
        <Browse handlefilters={handlefilters} filter={filter} handleclear={handleclear} />
      )}
      <Footer />
    </>
  );
};

export default Events;