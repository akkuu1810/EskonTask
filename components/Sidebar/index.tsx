import { SidebarContainer } from "./Sidebar.styles";
import { MENU_ITEMS } from "../../constants/menu-items";
import MenuItemsList from "../MenuItemsList";
import { Logout } from "@styled-icons/material";
import { signOut, useSession } from "next-auth/react";
import { setAuthState, setUserState } from "../../redux/authSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

type SidebarProps = {
  isOpened: boolean;
};
export default function Sidebar({ isOpened }: SidebarProps) {
  const { push } = useRouter();
  const dispatch = useDispatch();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      dispatch(setAuthState(false));
      dispatch(setUserState({}));
      push("/");
    }
  }, [status, push]);

  return (
    <SidebarContainer isOpened={isOpened}>
      <MenuItemsList options={MENU_ITEMS} />
      <div
        className="menu-item logoutButton"
        onClick={() => {
          signOut();
        }}
      >
        <Logout
          style={{
            width: 30,
            height: 30,
            padding: 5,
            marginRight: 15,
            background: "transparent",
            color: "#11244a",
            borderRadius: "100%",
          }}
        />
        <span>Logout</span>
      </div>
    </SidebarContainer>
  );
}
