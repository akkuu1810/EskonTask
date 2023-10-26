import { Menu, MenuOpen } from "@styled-icons/material";
import {
  HeaderContainer,
  IconContainer,
  TitleContainer,
} from "./Header.styles";
import { useSelector } from "react-redux";
import { selectUserState } from "../../redux/authSlice";
import Image from "next/image";

type HeaderProps = {
  isOpened: boolean;
  toggleDrawer: () => void;
};

export default function Header({ isOpened, toggleDrawer }: HeaderProps) {
  const userState = useSelector(selectUserState);
  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <MenuOpen /> : <Menu />}
      </IconContainer>
      <TitleContainer>
        <div className="flex">
          <div>
            <span>{userState?.user?.name}</span>
          </div>
          <div>
            {
              userState?.user?.image && <Image
              loader={() => userState?.user?.image}
              src={userState?.user?.image}
              alt={userState?.user?.name}
              width={50}
              height={50}
            />
            }
            
          </div>
        </div>
      </TitleContainer>
    </HeaderContainer>
  );
}
