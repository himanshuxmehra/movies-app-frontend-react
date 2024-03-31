import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";
const apiUrl = process.env.REACT_APP_API_URL;

function Trailer() {
    let [video, setVideo] = useState("invalid");
    let [loading, setLoading] = useState(true);
    const { id } = useParams();
    if (id) console.log(id);

    useEffect(() => {

        const fetchData = async () => {
            let options;
            if (id) {
                options = {
                    method: "GET",
                    url: apiUrl + "/fetchMovieDetail/video/" + id,
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
            }

            axios
                .request(options)
                .then((response) => {
                    console.log(response);

                    setVideo(
                        "https://www.youtube.com/embed/" +
                        response.data.results[0].key +
                        "?autoplay=1&modestbranding=1"
                    );
                    console.log(video);
                    setLoading(false);

                })
                .catch((error) => {
                    console.error(error);
                });
        };
        fetchData();
    }, [id]);
    return (
        <Container>
            { !loading ? <iframe
                width="100%"
                height="720"
                src={video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                style={{
                }}
            >
            </iframe> : <LoadingSpinner/>}
        </Container>
    )
}

export default Trailer

const Container = styled.div`
    align-items: center;
`
