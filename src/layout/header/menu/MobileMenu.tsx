import React, { useState } from "react";
import { Menu } from "./Menu";
import { S } from "./HeaderMenu_Styles";

type MenuPropsType = {
  menuItems: { title: string; href: string }[];
};

export const MobileMenu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={menuIsOpen}>
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  );
};
