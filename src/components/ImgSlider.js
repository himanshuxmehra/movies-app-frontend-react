import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function ImgSlider() {
  let [posts, setPosts] = useState();
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  useEffect(() => {
    const fetchData = async () => {
            axios
            .get("http://localhost:3300/fetchNewMovies")
            .then((response) => {
              setPosts(response.data);
            })
            .catch((error) => {
              console.error(error);
            });
      };
      fetchData()
    
  }, []);
  return (
    <Carousel {...settings}>
      {posts && posts.map((item,id) => (
        <Wrap> <Link to={"/detail/"+item.id}>
          <img src={"https://image.tmdb.org/t/p/original/"+item.backdrop_path} /></Link>
        </Wrap>
      ))}
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  padding-top: 20px;

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  img {
    border-radius: 4px;
    width: 100%;
    height: 500px;
    object-fit: cover;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 4px solid transparent;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
