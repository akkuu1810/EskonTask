import styled from "styled-components";

export const MenuItemContainer = styled.a<{ depth: number }>`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  padding: 10px 0px 10px 10px;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  margin: 0.5rem;

  & svg {
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${({ depth }) => `${depth}rem`};
  }

  &.selected {
    background-color: ${(props) => props.theme.colors.main};
    box-shadow: 0 4px 8px 0 rgba(17, 36, 74, 0.2),
      0 6px 20px 0 rgba(17, 36, 74, 0.1);
    color: ${(props) => props.theme.colors.textLight};
  }
`;
