import type { NextPage } from "next";
import Container from "../components/Container";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import { useSelector } from "react-redux";
import { selectUserState } from "./redux/authSlice";
import Image from "next/image";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #e4eaf7;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px 0 rgba(17, 36, 74, 0.2),
    0 3px 10px 0 rgba(17, 36, 74, 0.1);
  transition: all 02s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(17, 36, 74, 0.2),
      0 6px 20px 0 rgba(17, 36, 74, 0.1);
  }
`;

const Home: NextPage = () => {
  const userState = useSelector(selectUserState);
  return (
    <DashboardLayout>
      <Container title="Dashboard">
        <div className="flex customAlign">
          <CardContainer>
            {userState?.user?.image && (
              <Image
                loader={() => userState?.user?.image}
                src={userState?.user?.image}
                alt={userState?.user?.name}
                width={50}
                height={50}
              />
            )}
            <h1>{userState?.user?.name}</h1>
            <h3>{userState?.user?.email}</h3>
          </CardContainer>
        </div>
      </Container>
    </DashboardLayout>
  );
};

export default Home;
