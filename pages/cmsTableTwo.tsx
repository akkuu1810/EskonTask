import type { NextPage } from "next";
import Container from "../components/Container";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import { Key, ReactChild, ReactFragment, ReactPortal, useState } from "react";
import Pagination from "../components/Pagination";
import { paginate } from "../helper/paginate";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return {
    props: { data },
  };
};

const CmsTableTwo: NextPage = ({ data }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(data, currentPage, pageSize);

  return (
    <DashboardLayout>
      <Container title="CMS Table Two">
        <div className="flex customAlign">
          <div>
            <h1>CmsTableTwo</h1>
          </div>
        </div>
        {paginatedPosts.map(
          (item: {
            id: Key | null | undefined;
            title:
              | boolean
              | ReactChild
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          }) => {
            return <p key={item.id}>{item.title}</p>;
          }
        )}
        <div>
          <Pagination
            items={data.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>
      </Container>
    </DashboardLayout>
  );
};

export default CmsTableTwo;
