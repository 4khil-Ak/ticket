import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import MoviesCard from "../../Reusable/MoviesCard";

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

const MoviesOwl = (props) => {
  let arr = props.filter;
  return (

    <OwlCarousel className="owl-theme owl-carousel" {...options}>
      <MoviesCard eventsList={arr} />
    </OwlCarousel>
  );
};

export default MoviesOwl;