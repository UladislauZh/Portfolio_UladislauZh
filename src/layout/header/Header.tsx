import React from "react";
import { Logo } from "../../components/logo/Logo";
import { DesktopMenu } from "./menu/DesktopMenu";
import { Social } from "../../components/social/Social";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./menu/MobileMenu";
import { S } from "./Header_Styles";

const items = [
  { title: "Home", href: "#Home" },
  { title: "Tech Stack", href: "#Tech Stack" },
  { title: "Projects", href: "#Projects" },
  { title: "Contacts", href: "#Contacts" },
];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />

          {width < breakpoint ? (
            <MobileMenu menuItems={items} />
          ) : (
            <DesktopMenu menuItems={items} />
          )}

          <Social />
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
