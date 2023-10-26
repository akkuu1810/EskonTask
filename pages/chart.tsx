import type { NextPage } from "next";
import Container from "../components/Container";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import dynamic from 'next/dynamic'
const EchartsLineChart = dynamic(
  () => import('../components/ChartComponent'),
  { ssr: false },
)

const Chart: NextPage = () => {
  return (
    <DashboardLayout>
      <Container title="Chart">
        <EchartsLineChart />
      </Container>
    </DashboardLayout>
  );
};

export default Chart;
