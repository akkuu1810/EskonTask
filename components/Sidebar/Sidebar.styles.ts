import styled from "styled-components";

type SidebarContainerProps = {
  isOpened: boolean;
};
export const SidebarContainer = styled.aside<SidebarContainerProps>`
position: relative;
  background: transparent;
  margin-top:  0.5rem;
  margin-left: ${(props) => (props.isOpened ? "0.5rem" : "0rem")};
  width: ${(props) => (props.isOpened ? "20vw" : "0vw")};
  transition: width 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e4eaf7;
`;
