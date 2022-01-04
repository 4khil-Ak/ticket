import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import MoviesCard from "../../Reusable/MoviesCard";
import Loader from "../../Ui/Loader";
import Axios from "axios";

const options = {
  loop: true,
  margin: 30,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    450: {
      items: 2
    },
    750: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};

const MoviesOwl = () => {
  const url = "https://apidev.ticketezy.com/movies";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(res => {
      setLoading(false);
      setMovies(res.data);
    }).catch((error) => {
      setLoading(false);
    })
  }, [])
  let ui = null;
  if (movies === null) {
    ui = <>Loading...</>
  } else {
    ui = <>
      {movies !== null && movies.map((data) => {
        return (
          <MoviesCard eventsList={data} key={data.secret} />
        )
      })}
    </>
  }
  return (
    <>
      <OwlCarousel className="owl-theme owl-carousel" {...options}>
        {ui}
      </OwlCarousel>
      {loading && <Loader />}
    </>
  );
};

export default MoviesOwl;