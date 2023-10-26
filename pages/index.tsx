import type { NextPage } from "next";
import Container from "../components/Container";
import styled from "styled-components";
import { signIn, useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthState, setAuthState, setUserState } from "./redux/authSlice";
import { useEffect } from "react";
import { useRouter } from "next/router";

const LoginContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.textDark};
`;

const LoginCard = styled.div`
  background: ${(props) => props.theme.colors.textLight};
  box-shadow: 0 4px 8px 0 rgba(17, 36, 74, 0.1),
    0 6px 20px 0 rgba(17, 36, 74, 0.1);
  width: 30%;
  padding: 1rem;
  border-radius: 0.8rem;
`;

const LoginButton = styled.button`
  margin-top: 1rem;
  background: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.textLight};
  padding: 1rem;
  width: 100%;
  border: 0.1rem solid ${(props) => props.theme.colors.main};
  box-shadow: 0 2px 6px 0 rgba(0, 118, 255, 0.39);
  border-radius: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
  }
`;

const LoginButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const Home: NextPage = () => {
  const authState = useSelector(selectAuthState);
  const { data, status } = useSession();
  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleLogin = (type: string) => {
    if (type === "google") {
      signIn("google");
      if (status === "authenticated") {
        dispatch(setAuthState(true));
        dispatch(setUserState(data));
      }
    }
  };

  useEffect(() => {
    if (authState) {
      push("/dashboard");
    }
  }, [authState, push]);

  return (
    <Container title="Login">
      <LoginContainer>
        <LoginCard>
          <h1>Login to CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            asperiores sunt consectetur.
          </p>
          <LoginButtonContainer>
            <LoginButton onClick={() => handleLogin("google")}>
              Login via google
            </LoginButton>
          </LoginButtonContainer>
        </LoginCard>
      </LoginContainer>
    </Container>
  );
};

export default Home;
