import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import LoadingSpinner from './LoadingSpinner';
const apiUrl = process.env.REACT_APP_API_URL;

function Movies() {
    let [posts, setPosts] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = () => {
        setIsLoading(false);
      };
    useEffect(() => {
        const options = {
            method: 'GET',
            url: apiUrl+'/fetchDiscoveryFeed',
            headers: {
            'Content-Type': 'application/json'
            }
          };
        const fetchData = async () => {
                axios
                .request(options)
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
    <Container>
        <h4>
            Recommeded for you
        </h4>
        <Content>
            {posts && posts.map((item,id) => (
        <Wrap>
            <Link to={"/detail/"+item.id}>
            {isLoading && <LoadingSpinner />}
          <img loading="lazy" src={"https://image.tmdb.org/t/p/original/"+item.poster_path} onLoad={handleImageLoad}/>
          </Link>
        </Wrap>
      ))}
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5,minmax(0,1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb( 0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb( 0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    
  }

`