import React from "react";
import { S } from "./HeaderMenu_Styles";

type MenuPropsType = {
  menuItems: { title: string; href: string }[];
};

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <ul>
      {props.menuItems.map(({ title, href }) => {
        return (
          <S.MenuItem key={href}>
            <S.Link href={href}>
              {title}
              <S.Mask>
                <span>{title}</span>
              </S.Mask>
              <S.Mask>
                <span>{title}</span>
              </S.Mask>
            </S.Link>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
