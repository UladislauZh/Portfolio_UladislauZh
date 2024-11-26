import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type MenuPropsType = {
  menuItems: { title: string; href: string }[];
};

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map(({ title, href }) => {
          return (
            <ListItem key={href}>
              <Link href={href}>
                {title}
                <Mask>
                  <span>{title}</span>
                </Mask>
                <Mask>
                  <span>{title}</span>
                </Mask>
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`;

const Link = styled.a`
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;

  color: ${theme.colors.font};

  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const ListItem = styled.li`
  position: relative;

  &::before {
    content: "";
    height: 3px;
    background-color: ${theme.colors.font};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(1px);
      color: ${theme.colors.accent};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-1px);
      }
    }
  }
`;
