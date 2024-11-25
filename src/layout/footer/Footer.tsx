import React from "react";
import { styled } from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { Social } from "../../components/social/Social";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Uladislau</Name>
        <SocialContainer>
          <Social />
        </SocialContainer>
        <Copyright>© 2023 Uladislau Zhyhar, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 40px 0;
`;

const Name = styled.span`
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 1px;
  color: ${theme.colors.accent};
`;

const SocialContainer = styled.div`
  @media ${theme.media.mobile} {
    padding-left: 60px;
  }
`;

const Copyright = styled.small`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: ${theme.colors.font};
`;
