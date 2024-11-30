import React from "react";
import { Menu } from "./Menu";
import { S } from "./HeaderMenu_Styles";

type MenuPropsType = {
  menuItems: { title: string; href: string }[];
};

export const DesktopMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <S.DesctopMenu>
      <Menu menuItems={props.menuItems} />
    </S.DesctopMenu>
  );
};
