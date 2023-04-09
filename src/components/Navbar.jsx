import React , {useState} from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { fetchMovieList } from '../redux/movieAction'
import styled from 'styled-components';

export default function NavComp() {
  const NavbarBrand = styled(Navbar.Brand)`
    color: white;
    font-weight: bold;
  `;

  const NavbarToggle = styled(Navbar.Toggle)`
    background: white;
  `;

  const NavContainer = styled(Nav)`
    maxHeight: 100px;
  `;

  const MagnifyingGlass = styled(MagnifyingGlassIcon)`
    width: 22px;
    height: 22px;
    marginRight: 6px;
    background: #00CE79;
  `;

  const SearchContainer = styled.div`
    display: flex;
  `
  
  const [searchBox, setToggleSearchBox] = useState(false);

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchMovieList(1, searchQuery));
  }

  return (
    <Navbar
      className="navbar"
      expand="lg"
      style={{ position: "sticky", height: "fit-content", top: 0, zIndex: 2 }}
    >
      <Container>
        <NavbarBrand href="/">
          WikiMovie
        </NavbarBrand>

        <NavbarToggle
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <NavContainer
            className="me-auto my-2 my-lg-0 d-flex gap-3"
            navbarScroll
          >
            <Button
              onClick={ () => setToggleSearchBox(!searchBox)}
              style={{
                display: "flex",
                alignItems: "center",
                background:"#00CE79",
              }}
            >
              <MagnifyingGlass />
            </Button>
            {searchBox ?
              <SearchContainer>
                <Form onSubmit={handleSearch} id='form' className=' d-flex gap-3 w-100'>
                  <Form.Control 
                    className='search-box py-2 w-100'
                    placeholder='search movies' value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} autoFocus={true} />
                  <Button
                    onClick={handleSearch}
                    style={{
                      background:"#00CE79",
                      border:'none',
                      color:'black'
                    }}
                    className='search-btn'>
                      Search
                  </Button>
                </Form>
              </SearchContainer>
            : ''}
          </NavContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
