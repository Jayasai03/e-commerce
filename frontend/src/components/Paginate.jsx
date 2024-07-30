import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Paginate = ({ pages, page, isAdmin = false, keyword = '', type = ''}) => {
  return (
    pages > 1 && (
      <Pagination>
  {[...Array(pages).keys()].map((x) => (
    <Pagination.Item
    as={Link}
    key={x + 1}
    to={
      !isAdmin
        ? type
          ? `/filter/${type}/page/${x + 1}`
          : keyword
            ? `/search/${keyword}/page/${x + 1}`
            : `/page/${x + 1}`
        : `/admin/productlist/${x + 1}`
    }
    active={x + 1 === page}
  >
    {x + 1}
  </Pagination.Item>
  ))}
</Pagination>
    )
  );
};

export default Paginate;
