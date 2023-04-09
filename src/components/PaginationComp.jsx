import ReactPaginate from "react-paginate";
import { useDispatch } from 'react-redux'
import { fetchMovieList } from '../redux/movieAction'

export const PaginationComp = ({ totalPages, currentPage }) => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(fetchMovieList(e.selected + 1, ''))
  }

  return (
    <ReactPaginate
      className="paginate"
      breakLabel="..."
      onPageChange={handleSearch}
      pageRangeDisplayed={2}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
    />
  );
}
