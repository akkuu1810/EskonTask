import type { NextPage } from "next";
import Container from "../components/Container";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";

const CmsTableOne: NextPage = () => {
  return (
    <DashboardLayout>
      <Container title="New Orders">
        <div>CmsTableOne</div>
      </Container>
    </DashboardLayout>
  );
};

export default CmsTableOne;
