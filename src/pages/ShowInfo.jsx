import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import NavComp from '../components/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_KEY, IMAGE_LINK } from '../constants';
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from 'styled-components';

export default function ShowInfo() {
  const PageHeading = styled.h3`
    font-size: 33px;
    color: white;
  `;

  const SectionHeading = styled.h2`
    color: white;
  `;

  const Img = styled.img`
    border-radius: 5px;
    box-shadow: rgb(46 255 14 / 10%) -1px -1px 57px 1px;
    width: 350;
    height: 500;
    objectFit: cover
  `;

  const Overview = styled.p`
    color: #a5a5a5;
    margin-top: 15px;
    line-height: 1.8;
  `;

  const ReleaseDate = styled.p`
    color: #a5a5a5;
    font-weight: bold;
  `;

  const CastName = styled.p`
    color: white;
    textAlign: center;
  `;

  const CastCharacter = styled.p`
    color: white;
    textAlign: center;
  `;

  const CastContainer = styled.div`
    display: grid;
    placeItems: center;
  `;

  const [movieInfo, setMovieInfo] = useState();
  const [movieCast, setMovieCast] = useState([])
  const params = useParams()
  const { id: movieId } = params

  const fetchMovieDetails = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    setMovieInfo(data)
  }

  const fetchMovieCast = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    setMovieCast(data.cast)
  }

  useEffect(() => {
    fetchMovieDetails();
    fetchMovieCast();
  }, [movieId])

  return (
    <>
      <NavComp />
      <Container>
        <div className="wrapper mt-4">
          <div id="movie-info" className=" d-flex gap-5">
            <Img src={`${IMAGE_LINK}${movieInfo?.backdrop_path}`} alt='movie thumnail' />
            <div className="mt-5">
              <PageHeading>{movieInfo?.title}</PageHeading>
              <Overview>{movieInfo?.overview}</Overview>
              <ReleaseDate>Release Date: {movieInfo?.release_date}</ReleaseDate>
            </div>
          </div>
          <div className="mt-5">
            <SectionHeading>Cast</SectionHeading>
            <div className='d-flex flex-wrap gap-5 mt-5'>

              {movieCast?.map((cast) =>
                <CastContainer key={cast.id}>
                  <LazyLoadImage
                    width={100}
                    height={100}
                    style={{
                      objectFit: 'cover',
                      borderRadius: '100%'
                    }}
                    src={`${IMAGE_LINK}${cast.profile_path}`} alt='user' />
                  <CastName className='m-0 mt-2 mb-1'>{cast.name}</CastName>
                  <CastCharacter>{cast.character}</CastCharacter>
                </CastContainer>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
