import React from "react";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";
import { styled } from "styled-components";

export const Logo = () => {
  return (
    <IconLogo href="https://uladislauzh.github.io/portfolio-start-project/">
      <Icon width="80" height="80" viewBox="-35 0 364 364" iconId={"logoSvg"} />
      <p>Uladislau Zh</p>
    </IconLogo>
  );
};

const IconLogo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  p {
    background-image: linear-gradient(90deg, #83caeb 0%, #b380ee 100%);
    background-clip: text;
    color: transparent;
  }

  @media ${theme.media.mobile} {
    p {
      display: none;
    }
  }
`;
