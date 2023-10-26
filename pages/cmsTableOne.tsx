import type { NextPage } from "next";
import Container from "../components/Container";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";

const CmsTableOne: NextPage = () => {
  return (
    <DashboardLayout>
      <Container title="CMS Table One">
        <div>CmsTableOne</div>
      </Container>
    </DashboardLayout>
  );
};

export default CmsTableOne;
