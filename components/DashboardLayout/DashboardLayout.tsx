import { useEffect, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, Content, PageContainer } from "./DashboardLayout.styles";
import { useSelector } from "react-redux";
import { selectAuthState, selectUserState } from "../../pages/redux/authSlice";
import { useRouter } from "next/router";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpened, setOpened] = useState(true);
  const { push } = useRouter();
  const authState = useSelector(selectAuthState);
  const userState = useSelector(selectUserState);

  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  useEffect(() => {
    if (!authState || userState.length) {
      console.log(authState, userState)
      push("/");
    }
  }, [authState, userState, push]);

  return (
    <Container>
      <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
      <Content>
        <Sidebar isOpened={isOpened} />
        <PageContainer>{children}</PageContainer>
      </Content>
    </Container>
  );
}
