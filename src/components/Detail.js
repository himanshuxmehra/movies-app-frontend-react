import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
function Detail() {
  let [movieDetail, setMovieDetail] = useState("invalid");
  const { id } = useParams();
  if (id) console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:3300/fetchMovieDetail/" + id)
        .then((response) => {
          console.log(response.data.genres);
          setMovieDetail(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
  }, [id]);
  return (
    <Container>
      <Background>
        <img
          src={
            "https://image.tmdb.org/t/p/original/" + movieDetail.backdrop_path
          }
        />
      </Background>
      <ImageTitle>
        <h2>{movieDetail.title}</h2>
        <img
          src={
            "https://image.tmdb.org/t/p/original/" + movieDetail.poster_path
          }
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        {movieDetail.release_date} • {movieDetail.runtime} mins •{" "}
        {movieDetail.genres && movieDetail.genres.map((item) => (
          <>{item.name} </>
        ))}
      </SubTitle>
      <Description>
        {movieDetail.overview}<br/>
        {/* {movieDetail.production_companies && movieDetail.production_companies.map((item) => (
          <img
          src={
            "https://image.tmdb.org/t/p/original/" + item.logo_path
          }
        />
        ))} */}
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 52vh;
  min-height: 170px;
  min-width: 200px;
  width: 38vw;

  img {
    width: 50%;
    height: 100%;
    object-fit: fill;
  }
`;

const Controls = styled.div`
    margin-top: -20px;
    padding-left: 10px;
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  font-size: 20px;
  margin-top: 16px;
  line-height: 1.4;
`;
