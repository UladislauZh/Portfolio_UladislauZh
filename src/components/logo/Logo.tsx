import React from "react";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";
import { styled } from "styled-components";

export const Logo = () => {
  return (
    <IconLogo href="">
      <Icon width="97" height="59" viewBox="0 0 97 59" iconId={"logoSvg"} />
    </IconLogo>
  );
};

const IconLogo = styled.a`
  @media ${theme.media.mobile} {
    display: none;
  }
`;
