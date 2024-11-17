import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

// type MenuPropsType = {
//   menuItems: Array<string>
// }

export const ProjectMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <ListItem key={index}>
              <Link href="">{item}</Link>
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
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  position: relative;
`;

const Link = styled.a`
  font-weight: 300;
  font-size: 14px;
  line-height: 162%;
  color: ${theme.colors.accent};

  &:hover {
    &::before {
      height: 1px;
    }
  }

  &::before {
    content: "";
    display: inline-block;

    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 4px;
    left: -5px;
    right: -5px;
  }
`;
