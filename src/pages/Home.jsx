import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MovieCard } from '../components/MovieCard'
import NavComp from '../components/Navbar'
import { PaginationComp } from '../components/PaginationComp'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieList } from '../redux/movieAction'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchMovieList(1))
  }, [])

  const product = {
    name: 'I Phone',
    price: '2131.00'
  }

  const resultMovie = useSelector((state) => state.movieData)

  return (
    <>
      <NavComp />
      <Container className='mt-4'>
        <Row md={3} xs={1} lg={4} className="g-4">
          {resultMovie?.results?.map((item) =>
            <Col key={item.id}>
              <MovieCard movie={item} />
            </Col>
          )}

        </Row>
        <div className="mt-5 d-flex justify-content-center">
          <PaginationComp totalPages={resultMovie.total_pages} currentPage={resultMovie.page} />
        </div>
      </Container>
    </>
  )
}
export default Home
