import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background: ${(props) => props.theme.colors.main};
  height: 7vh;
  margin: 0.5rem;
  border-radius: 0.8rem;
  box-shadow: 0 4px 8px 0 rgba(17, 36, 74, 0.1),
    0 6px 20px 0 rgba(17, 36, 74, 0.1);
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  color: ${(props) => props.theme.colors.textLight};
`;

export const IconContainer = styled.div`
  padding: 10px;

  & svg {
    height: 30px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  padding: 10px;
`;
