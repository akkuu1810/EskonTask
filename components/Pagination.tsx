import styled from "styled-components";

const PaginationContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const PageLink = styled.a`
  cursor: pointer;
`;

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);

  return (
    <div>
      <PaginationContainer>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "pageItemActive" : "pageItem"}
          >
            <PageLink onClick={() => onPageChange(page)}>{page}</PageLink>
          </li>
        ))}
      </PaginationContainer>
    </div>
  );
};

export default Pagination;
