import React from "react";
import { IconSocials } from "../icon/IconSocials";
import styled from "styled-components";

export const Social = () => {
  return (
    <StyledSocial>
      <a href="">
        <IconSocials iconId={"githubLinkVector"} />
      </a>
      <a href="">
        <IconSocials iconId={"linkedinLinkVector"} />
      </a>
      <a href="">
        <IconSocials iconId={"x(twitter)LinkVector"} />
      </a>
    </StyledSocial>
  );
};

const StyledSocial = styled.a``;
