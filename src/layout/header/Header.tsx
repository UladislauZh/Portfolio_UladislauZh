import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Social } from "../../components/social/Social";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "../../components/menu/MobileMenu";
import { theme } from "../../styles/Theme";

// const items = [
//   { title: "Home", href: "#Home" },
//   { title: "Tech Stack", href: "#Tech Stack" },
//   { title: "Projects", href: "#Projects" },
//   { title: "Contacts", href: "#Contacts" },
// ];

const items = ["Home", "Tech Stack", "Projects", "Contacts"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />
          <Menu menuItems={items} />
          <Social />
          <MobileMenu menuItems={items} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  max-width: 1230px;
  margin: 0 auto;
  background-color: #1f1f1fb8;

  border-radius: 0 0 50px 50px;

  /* padding: 20px; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;
